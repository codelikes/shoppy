import { Controller, Get, Redirect, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { getShopUrl } from '@app/common/utils';
import { ConfigService } from '@app/common/config.service';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService, private configService: ConfigService) {}

  // region Instagram

  @Get('instagram/login')
  @UseGuards(AuthGuard('instagram'))
  async instagramLogin() {
    //
  }

  @Get('instagram/callback')
  @Redirect()
  @UseGuards(AuthGuard('instagram'))
  async instagramCallback(@Req() req) {
    const user = req.user.user as { id: number; username: string };
    const payload = { sub: user.id, username: user.username };
    const accessToken = this.jwtService.sign(payload);

    // todo: register user in db

    const redirectUrl = getShopUrl(this.configService.getConfig('appSiteUrl'), user.username);

    req.session.accessToken = accessToken;

    return {
      url: redirectUrl,
    };
  }

  @Get('instagram/logout')
  @UseGuards(AuthGuard('instagram'))
  async instagramLogout(@Req() req) {
    return {};
  }

  @Get('instagram/remove')
  @UseGuards(AuthGuard('instagram'))
  async instagramRemove(@Req() req: Request) {
    return {};
  }

  // endregion
}
