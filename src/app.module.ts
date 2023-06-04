import * as winston from 'winston';
import { Module } from '@nestjs/common';
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

          // new winston.transports.DailyRotateFile({
          //   format: winston.format.combine(
          //     winston.format.colorize({ all: true }),
          //     winston.format.timestamp(),
          //     winston.format.ms(),
          //     nestWinstonModuleUtilities.format.nestLike('web-content-srv', {
          //       prettyPrint: true,
          //     }),
          //   ),
          //   dirname: join(__dirname, './log/debug/'),
          //   filename: 'app-%DATE%.log',
          //   options: { encoding: 'utf-8' },
          //   maxSize: '50m',
          //   maxFiles: 3,
          //   datePattern: 'YYYY-MM-DD',
          //   level: 'debug',
          // }),
          //
          // new winston.transports.DailyRotateFile({
          //   format: winston.format.combine(
          //     winston.format.colorize({ all: true }),
          //     winston.format.timestamp(),
          //     winston.format.ms(),
          //     nestWinstonModuleUtilities.format.nestLike('web-content-srv', {
          //       prettyPrint: true,
          //     }),
          //   ),
          //   dirname: join(__dirname, './log/app/'),
          //   filename: 'debug-%DATE%.log',
          //   options: { encoding: 'utf-8' },
          //   maxSize: '20m',
          //   maxFiles: 30,
          //   datePattern: 'YYYY-MM-DD',
          //   level: 'debug',
          // }),
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
export class AppModule {}
