import { Controller, Get, Render, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('shop/:account/panel')
export class ShopPanelController {
  @UseGuards(AuthGuard('jwt'))
  @Render('shop-panel')
  @Get()
  admin(@Req() req) {
    return req.user;
  }
}
