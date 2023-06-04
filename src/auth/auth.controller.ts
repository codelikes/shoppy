import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  // region Instagram

  @Get('instagram/login')
  @UseGuards(AuthGuard('instagram'))
  async instagramLogin() {
    //
  }

  @Get('instagram/callback')
  @UseGuards(AuthGuard('instagram'))
  async instagramCallback(@Req() req) {
    debugger;

    const user = req.user;
    const payload = { sub: user.id, username: user.username };
    return { accessToken: this.jwtService.sign(payload), req: req };
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

  // endregion
}
