import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
import { LoginUserDto, LogoutUserDto, RegisterUserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { Login } from './interfaces/user';
import { JwtService } from '@nestjs/jwt';
import { SearchUserDto } from './dto/search-user.dto';
import { IToken, IUser } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users')
    private readonly userRepository: Model<IUser>,
    private readonly jwtService: JwtService,
    @InjectModel('Tokens')
    private readonly tokenRepository: Model<IToken>,
  ) {}

  async findAll(): Promise<IUser[]> {
    return this.userRepository.find();
  }

  async findOne(_id: string): Promise<IUser | null> {
    return await this.userRepository.findOne({ _id });
  }

  async create(registerUserDto: RegisterUserDto): Promise<IUser> {
    const { firstName, lastName, email, userName, password } = registerUserDto;
    const user = await this.userRepository.findOne({ userName });
    if (user) {
      throw new UnauthorizedException(`User Already exist`);
    }
    const encPass = await bcrypt.hash(password, 10);
    const payload = {
      firstName,
      lastName,
      email,
      userName,
      password: encPass,
    };
    return this.userRepository.create(payload);
  }

  // async update(id: number, updateProductDto: UpdateProductDto): Promise<User | null> {
  //   const brand = await this.findOne(id);
  //   if (!brand) {
  //     return null;
  //   }

  //   Object.assign(brand, updateProductDto);
  //   return this.userRepository.save(brand);
  // }

  async delete(_id: string): Promise<boolean | any> {
    return await this.userRepository.findOneAndDelete({ _id });
  }

  async login(loginUserDto: LoginUserDto): Promise<Login> {
    const { phoneNumber } = loginUserDto;
    const user = await this.userRepository.findOne({ phoneNumber });
    if (!user) throw new UnauthorizedException(`User not exist`);
    // const cmpPass = await bcrypt.compare(password, user.password);
    // if (cmpPass) {
    const refreshToken = await this.jwtService.signAsync(
      {
        userName: user.userName,
        _id: user._id,
      },
      {
        expiresIn: '1d',
      },
    );
    const payload = {
      token: refreshToken,
    };
    const token = await this.tokenRepository.create(payload);

    return {
      token: token.token,
      userName: user.userName,
    };
    // } else {
    //   throw new UnauthorizedException(`User or password not exist`);
    // }
  }

  async register(registerUserDto: RegisterUserDto) {
    const { firstName, lastName, email, userName, password } = registerUserDto;
    const user = await this.userRepository.findOne({ userName });

    if (user) throw new UnauthorizedException(`User Already exist`);

    const encPass = await bcrypt.hash(password, 10);
    const payload = {
      firstName,
      lastName,
      email,
      userName,
      password: encPass,
    };

    await this.userRepository.create(payload);
    return {
      userName,
    };
  }

  async logout(logoutUserDto: LogoutUserDto) {
    // console.log("logoutUserDto", logoutUserDto)
    const { token } = logoutUserDto;
    console.log("token", token)
    console.log("token1", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImEiLCJfaWQiOiI2OWM1MTIxMzYwZDRiY2JjNTRhM2E2ZTYiLCJpYXQiOjE3NzYyNTcxNDIsImV4cCI6MTc3NjM0MzU0Mn0.7144bMOiRzJIpTsq7sezfBS1bSkaP9IMBrSk7ONs4oU")
    await this.tokenRepository.findOneAndDelete({ token });
    return {
      message: 'you are logged out',
    };
    // if (!user) throw new UnauthorizedException(`User not exist`);
    // // console.log('user', user._id);
    // const token = await this.tokenRepository.findOne({ userId: user._id });
    // if (!token) throw new UnauthorizedException(`Token not found`);

    // // console.log('token', token);
    // await this.tokenRepository.deleteOne({ _id: token._id });
  }

  // async logout(token: string) {
  //   const blacklistedToken = this.blacklistedTokenRepository.create({
  //     token,
  //     blacklistedAt: new Date(),
  //   });
  //   await this.blacklistedTokenRepository.save(blacklistedToken);
  //   return { message: 'شما با موفقیت خارج شدید' };
  // }

  // async validateUserById(userId: number): Promise<boolean> {
  //   const user = await this.userRepository.findOne({
  //     where: {
  //       _id: userId,
  //     },
  //   });
  //   if (user) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  async search(searchUserDto: SearchUserDto) {
    const { search } = searchUserDto;
    const books = search;

    return books;
  }
}
