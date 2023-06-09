import * as winston from 'winston';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ShopModule } from './shop/shop.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@app/common/common.module';
import { ConfigService } from '@app/common/config.service';
import { ConfigService as NestConfigService } from '@nestjs/config/dist/config.service';
import { SiteModule } from '@app/site/site.module';
import { APP_FILTER } from '@nestjs/core';
import { AppExceptionFilter } from '@app/common/exception/app-exception.filter';
import { utilities as nestWinstonModuleUtilities, WinstonModule } from 'nest-winston';
import { MongooseModule } from '@nestjs/mongoose';
import { ApplicationLogger } from '@app/common/middlewares/application-logger.middleware';
import { ShopOwnerMiddleware } from '@app/common/middlewares/shop-owner.middleware';
import { JwtProvider } from '@app/common/jwt.provider';

@Module({
  controllers: [],
  providers: [
    {
      provide: ConfigService,
      inject: [NestConfigService],
      useFactory: (nestConfigService: NestConfigService) =>
        new ConfigService(nestConfigService),
    },
    {
      provide: APP_FILTER,
      useClass: AppExceptionFilter,
    },
  ],
  imports: [
    JwtProvider,
    MongooseModule.forRoot(process.env.DOCKER_MONGO_URI),
    WinstonModule.forRootAsync({
      inject: [ConfigService],
      imports: [CommonModule],
      useFactory: (config: ConfigService) => ({
        transports: [
          new winston.transports.Console({
            level: 'debug',
            format: winston.format.combine(
              winston.format.timestamp(),
              winston.format.ms(),
              nestWinstonModuleUtilities.format.nestLike(config.getConfig('appName'), {
                prettyPrint: true,
              }),
            ),
          }),
        ],
      }),
    }),

    CommonModule,
    AuthModule,
    SiteModule,
    ShopModule,
  ],
  exports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ApplicationLogger).forRoutes('*');
    consumer.apply(ShopOwnerMiddleware).forRoutes('*');
  }
}
