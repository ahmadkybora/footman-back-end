import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // console.log("req", req.headers.authorization);
    const { url, headers } = req;
    const authHeader = headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'cant auth' });
    }
    const token = authHeader.split(' ')[1];
    try {
      // const decoded = this.jwtService.verify(token, { secret: this.configService.get<string>('SECRET_KEY') });
      const decoded = this.jwtService.verify(token, { secret: '!@#mjtY5gs#-@aw1D54!@#mjtY5gs#w1c3!@25#@m-' }); 
      console.log('decode', decoded)
      req.user = decoded;
      // console.log("decoded", decoded)
      // if (url.startsWith('/admin') && decoded.role !== 'admin') {
      //   return res.status(403).json({ message: 'دسترسی غیرمجاز: نقش نامعتبر' });
      // }
      // console.log('req', req)
      next();
    } catch (error) {
      return res.status(401).json({ message: 'توکن نامعتبر' });
    }
  }
}
