import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { CommonModule } from '@app/common/common.module';

@Module({
  imports: [CommonModule],
  controllers: [ShopController],
  providers: [ShopService],
  exports: [],
})
export class ShopModule {}
