import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Profile, Strategy } from 'passport-instagram';
import { ConfigService } from '@app/common/config.service';

@Injectable()
export class AuthInstagramStrategy extends PassportStrategy<Strategy>(Strategy, 'instagram') {
  constructor(private configService: ConfigService) {
    super({
      clientID: configService.getInstagramConfig().clientId,
      clientSecret: configService.getInstagramConfig().clientSecret,
      callbackURL: configService.getInstagramConfig().redirectUrl,
      scope: 'user_profile, user_media',
    });
  }

  async validate(accessToken: string, _refreshToken: string, profile: Profile) {
    return profile;
  }
}
