import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get()
  root() {
    return { message: 'Hello world!' };
  }

  @Get(':shop')
  shop(@Param('shop') shop: string) {
    return { shop };
  }
}
