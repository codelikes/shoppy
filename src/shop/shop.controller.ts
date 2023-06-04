import { Controller, Get, HostParam, Render } from '@nestjs/common';
import { ConfigService } from '@app/common/config.service';
import { UserService } from '@app/database/services/user.service';

@Controller({
  host: ':account.:domain',
  path: '',
})
export class ShopController {
  constructor(private configService: ConfigService, private userService: UserService) {}

  @Get()
  @Render('shop')
  async shop(@HostParam('account') account: string, @HostParam('domain') domain: string) {
    return {
      account,
      domain,
      user: this.userService.findOneByInstagramUsername(account),
    };
  }
}
