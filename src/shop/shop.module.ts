import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { CommonModule } from '@app/common/common.module';
import { AdminController } from '@app/shop/admin.controller';
import { DatabaseModule } from '@app/database/database.module';

@Module({
  imports: [DatabaseModule, CommonModule],
  controllers: [ShopController, AdminController],
  providers: [ShopService],
  exports: [],
})
export class ShopModule {}
