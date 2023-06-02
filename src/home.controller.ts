import { Controller, Get, Param, Render } from '@nestjs/common';

@Controller()
export class HomeController {
  @Get()
  @Render('index')
  index() {
    return { message: 'routes: get: /, get: /page/:page, get: /:shop' };
  }

  @Get('page/:page')
  @Render('page')
  page(@Param('page') page: string) {
    return { page };
  }

  @Get(':shop')
  @Render('shop')
  shop(@Param('shop') shop: string) {
    return { shop };
  }
}
