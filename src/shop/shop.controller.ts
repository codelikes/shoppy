import { Controller, Get, Param, Render } from '@nestjs/common';
import { ConfigService } from '@app/common/config.service';
import { UserService } from '@app/database/services/user.service';
import { NotFoundException } from '@app/common/exception/exceptions/not-found.exception';

@Controller('shop/:account')
export class ShopController {
  constructor(private configService: ConfigService, private userService: UserService) {}

  @Get()
  @Render('shop')
  async shop(@Param('account') account: string) {
    const user = await this.userService.findOneByInstagramUsername(account);

    if (!user) {
      throw new NotFoundException('Shop not found');
    }

    return {
      user,
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
