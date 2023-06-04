import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { isDev } from '@app/common/utils';

@Injectable()
export class ConfigService {
  private configs: ConfigGlobalStore = {
    appDebug: isDev(),
    appSiteUrl: this.nestConfigService.get<string>('APP_SITE_URL'),
    appPort: parseInt(this.nestConfigService.get<string>('DOCKER_APP_PORT'), 10) || 3000,
    appName: this.nestConfigService.get<string>('APP_NAME'),
    appSecret: this.nestConfigService.get<string>('APP_SECRET'),
    appAuthExpiresIn: this.nestConfigService.get<string>('APP_AUTH_EXPIRES_IN'),
    instagram: {
      clientId: this.nestConfigService.get<string>('APP_AUTH_INSTAGRAM_CLIENT_ID'),
      clientSecret: this.nestConfigService.get<string>('APP_AUTH_INSTAGRAM_CLIENT_SECRET'),
      redirectUrl: `${this.nestConfigService.get<string>('APP_SITE_URL')}${this.nestConfigService.get<string>(
        'APP_AUTH_INSTAGRAM_REDIRECT_URL',
      )}`,
    },
  };

  constructor(private nestConfigService: NestConfigService) {}

  getConfig(configKey: keyof ConfigGlobalStore): any {
    return this.configs[configKey] || null;
  }

  getInstagramConfig(): InstagramConfig {
    return this.configs.instagram;
  }
}

export interface ConfigGlobalStore {
  appDebug?: boolean;
  appSiteUrl?: string;
  appPort?: number;
  appSecret?: string;
  appName?: string;
  appAuthExpiresIn?: string;
  instagram?: InstagramConfig;
}

export interface InstagramConfig {
  clientId: string;
  clientSecret: string;
  redirectUrl: string;
}
