import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { CommonModule } from '@app/common/common.module';
import { AdminController } from '@app/shop/admin.controller';

@Module({
  imports: [CommonModule],
  controllers: [ShopController, AdminController],
  providers: [ShopService],
  exports: [],
})
export class ShopModule {}
