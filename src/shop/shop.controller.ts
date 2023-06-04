import { Controller, Get, Param, Render } from '@nestjs/common';
import { ConfigService } from '@app/common/config.service';

@Controller({
  path: ':shopName',
})
export class ShopController {
  constructor(private configService: ConfigService) {}

  @Get()
  @Render('shop')
  async shop(@Param('shopName') shopName: string) {
    return { shopName };
  }
}
