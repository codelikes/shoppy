import { Controller, Get, Param, Render } from '@nestjs/common';
import { ConfigService } from '@app/common/config.service';
import { UserService } from '@app/database/services/user.service';

@Controller('shop/:account')
export class ShopController {
  constructor(private configService: ConfigService, private userService: UserService) {}

  @Get()
  @Render('shop')
  async shop(@Param('account') account: string) {
    return {
      user: this.userService.findOneByInstagramUsername(account),
    };
  }

  @Get('pages/:page')
  async getShopStaticPage(
    @Param('account') account: string,
    @Param('page') page: string,
  ) {
    return { account, page };
  }
}
