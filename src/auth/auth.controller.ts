import { Controller, Get, Redirect, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { getShopUrl } from '@app/common/utils';
import { ConfigService } from '@app/common/config.service';
import { UserService } from '@app/database/services/user.service';
import { InstagramCallbackPayload } from '@app/auth/auth.strategy';

@Controller('auth')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private userService: UserService,
  ) {}

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
    const userReq = req.user as InstagramCallbackPayload;
    const payload = { sub: userReq.user.id, username: userReq.user.username };
    const accessToken = this.jwtService.sign(payload);

    let user = await this.userService.findOneByInstagramId(userReq.user.id);

    if (user) {
      // update user in db
      await this.userService.updateOneByInstagramId(user.instagramId, {
        instagramAccessToken: userReq.accessToken,
        instagramAccessTokenExpiresAt: new Date(),
        instagramUsername: userReq.user.username,
      });
    } else {
      {
        // register user in db
        user = await this.userService.create({
          instagramAccessToken: userReq.accessToken,
          instagramAccessTokenExpiresAt: new Date(),
          instagramId: userReq.user.id,
          instagramUsername: userReq.user.username,
        });
      }
    }

    // save jwt token in session
    req.session.jwt = accessToken;

    const redirectUrl = getShopUrl(
      this.configService.getConfig('appSiteUrl'),
      user.instagramUsername,
    );

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
