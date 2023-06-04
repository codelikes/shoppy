import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Get('instagram/login')
  @UseGuards(AuthGuard('instagram'))
  async instagramLogin() {
    //
  }

  @Get('instagram/callback')
  @UseGuards(AuthGuard('instagram'))
  async instagramCallback(@Req() req) {
    const user = req.user;
    const payload = { sub: user.id, username: user.username };

    return { accessToken: this.jwtService.sign(payload) };
  }

  @Get('instagram/logout')
  @UseGuards(AuthGuard('instagram'))
  async instagramLogout(@Req() req) {
    return {};
  }

  @Get('instagram/remove')
  @UseGuards(AuthGuard('instagram'))
  async instagramRemove(@Req() req) {
    return {};
  }
}
