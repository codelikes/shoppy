import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Shop = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  // const request = ctx.switchToHttp().getRequest();

  return 'test';
});
