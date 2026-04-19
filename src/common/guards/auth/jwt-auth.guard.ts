// import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { JwtService } from '@nestjs/jwt';
// import { Observable } from 'rxjs';

// @Injectable()
// export class JwtAuthGuard implements CanActivate {
//   constructor(
//     private readonly jwtService: JwtService,
//     private readonly configService: ConfigService,
//   ) {}
//   canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
//     const authHeader = context.switchToHttp().getRequest().headers?.authorization;
//     const token = authHeader.split(' ')[1];
//     const decoded = this.jwtService.verify(token, { secret: this.configService.get<string>('SECRET_KEY') });
//     context.switchToHttp().getRequest().user = decoded;
//     if (!authHeader) return false;
//     return true;
//   }
// }
// auth.guard.ts
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { BlacklistedToken } from './blacklisted-token.entity';
// import { IToken } from '../../../admin/users/user.entity';
// import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IToken } from 'src/admin/users/entities/user.entity';

@Injectable()
export class AuthGuard implements CanActivate {
  // constructor(
  //   private jwtService: JwtService,
  //   @InjectRepository(BlacklistedToken)
  //   private blacklistedTokenRepository: Repository<BlacklistedToken>,
  // ) {}
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel('Tokens')
    private readonly tokenRepository: Model<IToken>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedException('توکن معتبر نیست');
    }

    const token = authHeader.split(' ')[1];

    const isBlacklisted = await this.tokenRepository.findOne({ token });

    console.log("isBlacklisted", isBlacklisted);
    if (!isBlacklisted) {
      throw new UnauthorizedException('توکن شما ناکارآمد شده است');
    }
    // if (isBlacklisted === null) {
    //   throw new UnauthorizedException('توکن شما ناکارآمد شده است');
    // }

    try {
      console.log("tt", token)
      const decoded = this.jwtService.verify(token, { secret: '!@#mjtY5gs#-@aw1D54!@#mjtY5gs#w1c3!@25#@m-' }); 
      // const decoded = this.jwtService.verify(token);
      console.log("decoded", decoded)
      request.user = decoded;
      return true;
    } catch (error) {
      throw new UnauthorizedException('توکن معتبر نیست یا منقضی شده است');
    }
  }
}
