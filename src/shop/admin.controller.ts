import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller(':shopName/admin')
export class AdminController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  admin(@Req() req) {
    return req.user;
  }
}
