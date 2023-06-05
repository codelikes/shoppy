import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { CommonModule } from '@app/common/common.module';
import { ShopPanelController } from '@app/shop/shop-panel.controller';
import { DatabaseModule } from '@app/database/database.module';

@Module({
  imports: [DatabaseModule, CommonModule],
  controllers: [ShopController, ShopPanelController],
  providers: [ShopService],
  exports: [],
})
export class ShopModule {}
