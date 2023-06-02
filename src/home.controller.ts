import { Controller, Get, Param } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get()
  index() {
    return { message: 'routes: get: /, get: /page/:page, get: /:shop' };
  }

  @Get('page/:page')
  page(@Param('page') page: string) {
    return { page };
  }

  @Get(':shop')
  shop(@Param('shop') shop: string) {
    return { shop };
  }
}
