import { Controller, Get, Param, Render } from '@nestjs/common';
import { ConfigService } from '@app/common/config.service';

@Controller()
export class ShopController {
  constructor(private configService: ConfigService) {}

  @Get(':shopName')
  @Render('shop')
  async shop(@Param('shopName') shopName: string) {
    return {};
  }
}
