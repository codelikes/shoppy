import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { ConfigService } from '@app/common/config.service';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '@app/auth/auth.module';
import { getShopPanelUrl } from '@app/common/utils';

@Injectable()
export class ShopOwnerMiddleware implements NestMiddleware {
  private readonly shopPanelRegex: RegExp = /^\/shop\/(.*)\/panel/;

  constructor(private configService: ConfigService, private jwtService: JwtService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const jwtPayload = (await this.jwtService.decode(
      (req.session as any)?.jwt,
    )) as JwtPayload;

    const match = this.shopPanelRegex.exec(req.originalUrl);
    if (match !== null) {
      const shop = match[1];

      if (jwtPayload && shop !== jwtPayload.username) {
        return res.redirect(
          getShopPanelUrl(
            this.configService.getConfig('appSiteUrl'),
            jwtPayload.username,
          ),
        );
      }
    }

    next();
  }
}
