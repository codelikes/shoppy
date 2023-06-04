import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class SiteController {
  @Get('')
  @Render('site')
  async shop() {
    return {};
  }

  @Get('about/policy')
  async getPolicy() {
    return {};
  }
}
