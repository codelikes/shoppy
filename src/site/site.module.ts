import { Module } from '@nestjs/common';
import { SiteController } from '@app/site/site.controller';

@Module({
  controllers: [SiteController],
})
export class SiteModule {}
