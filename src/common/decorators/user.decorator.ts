import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const userCurrent = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    return ctx.switchToHttp().getRequest().user;
  },
);
