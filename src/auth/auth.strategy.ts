import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@app/common/config.service';
import { Strategy as PassportInstagramStrategy } from 'passport-instagram';
import { Profile } from 'passport';
import { ExtractJwt, Strategy as PassportJwtStrategy } from 'passport-jwt';

@Injectable()
export class AuthStrategy extends PassportStrategy(PassportInstagramStrategy, 'instagram') {
  constructor(private configService: ConfigService) {
    super({
      clientID: configService.getInstagramConfig().clientId,
      clientSecret: configService.getInstagramConfig().clientSecret,
      callbackURL: configService.getInstagramConfig().redirectUrl,
      scope: ['user_profile', 'instagram_graph_user_profile'],
      // scope:
      // 'user_profile, instagram_graph_user_profile, user_media, instagram_graph_user_media, pages_show_list, instagram_graph_pages_show_list',
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user: any) => void,
  ): Promise<any> {
    const user = {
      id: profile.id,
      username: profile.username,
    };

    const payload = {
      user,
      accessToken,
    };

    done(null, payload);
  }
}

@Injectable()
export class AuthJwtStrategy extends PassportStrategy(PassportJwtStrategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.getConfig('appSecret'),
    });
  }

  async validate(payload: any) {
    return { id: payload?.sub, username: payload?.username };
  }
}
