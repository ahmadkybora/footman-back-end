// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy, ExtractJwt } from 'passport-jwt';
// import { jwtConstants } from 'src/admin/users/users.module';
// import { UsersService } from 'src/admin/users/users.service';

// @Injectable()
// export class JwtStrategyService extends PassportStrategy(Strategy) {
//   constructor(private userService: UsersService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: jwtConstants.secret,
//     });
//   }
//   async validate(payload: any) {
//     const isValidated = await this.userService.validateUserById(payload.id);
//     console.log("payload", payload);
//     if (isValidated) {
//       return { id: payload.id, email: payload.email };
//     } else {
//       throw new UnauthorizedException('UnAuthorized');
//     }
//   }
// }
