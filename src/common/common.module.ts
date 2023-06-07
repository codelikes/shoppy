import { Module } from '@nestjs/common';
import { ConfigService } from '@app/common/config.service';
import { ConfigModule } from '@nestjs/config';
import { ShopOwnerMiddleware } from '@app/common/middlewares/shop-owner.middleware';

@Module({
  controllers: [],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class CommonModule {}
