import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { LoginUserDto, LogoutUserDto, RegisterUserDto } from 'src/admin/users/dto/user.dto';
import { Login } from 'src/admin/users/interfaces/user';
// import { IUser } from 'src/admin/users/entities/user.entity';
import { UsersService } from 'src/admin/users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  @HttpCode(HttpStatus.OK)
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.usersService.register(registerUserDto);
  }

  @Post('/login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginUserDto: LoginUserDto): Promise<Login> {
    return this.usersService.login(loginUserDto);
  }

  @Post('/logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Body() logoutUserDto: LogoutUserDto) {
    return this.usersService.logout(logoutUserDto);
  }
}
