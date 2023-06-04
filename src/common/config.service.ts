import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  private configs: ConfigGlobalStore = {
    appPort: parseInt(this.nestConfigService.get<string>('DOCKER_APP_PORT'), 10) || 3000,
    appSecret: this.nestConfigService.get<string>('APP_SECRET'),
    appAuthExpiresIn: this.nestConfigService.get<string>('APP_AUTH_EXPIRES_IN'),
    instagram: {
      clientId: this.nestConfigService.get<string>('APP_AUTH_INSTAGRAM_CLIENT_ID'),
      clientSecret: this.nestConfigService.get<string>('APP_AUTH_INSTAGRAM_CLIENT_SECRET'),
      redirectUrl: this.nestConfigService.get<string>('APP_AUTH_INSTAGRAM_REDIRECT_URL'),
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
  appPort?: number;
  appSecret?: string;
  appAuthExpiresIn?: string;
  instagram?: InstagramConfig;
}

export interface InstagramConfig {
  clientId: string;
  clientSecret: string;
  redirectUrl: string;
}
