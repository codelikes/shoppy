import { Controller, Get, Param, Render, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class SiteController {
  @Get('')
  @Render('site')
  async shop(@Req() req: Request) {
    return {
      site: req.hostname,
    };
  }

  @Get('pages/:page')
  @Render('site-page')
  async getPolicy(@Param('page') page: string) {
    return { page };
  }
}
