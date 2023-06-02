import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get('page/:page')
  root(@Param('page') page: string) {
    return { page };
  }

  @Get(':shop')
  shop(@Param('shop') shop: string) {
    return { shop };
  }
}
