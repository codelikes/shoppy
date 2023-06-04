import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { InstagramService } from './instagram/instagram.service';

@Module({
  imports: [HttpModule],
  providers: [InstagramService],
  exports: [InstagramService],
})
export class ExternalModule {}
