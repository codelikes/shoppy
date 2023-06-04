import { Module } from '@nestjs/common';
import { ConfigService } from '@app/common/config.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class CommonModule {}
