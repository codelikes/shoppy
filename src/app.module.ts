import { Module } from '@nestjs/common';
import { ShopModule } from './shop/shop.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@app/common/common.module';
import { ConfigService } from '@app/common/config.service';
import { ConfigService as NestConfigService } from '@nestjs/config/dist/config.service';
import { SiteModule } from '@app/site/site.module';

@Module({
  controllers: [],
  providers: [
    {
      provide: ConfigService,
      inject: [NestConfigService],
      useFactory: (nestConfigService: NestConfigService) => new ConfigService(nestConfigService),
    },
  ],
  imports: [CommonModule, AuthModule, SiteModule, ShopModule],
  exports: [],
})
export class AppModule {}
