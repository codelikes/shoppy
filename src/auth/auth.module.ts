import { Module } from '@nestjs/common';
import { AuthJwtStrategy, AuthStrategy } from '@app/auth/auth.strategy';
import { AuthController } from '@app/auth/auth.controller';
import { CommonModule } from '@app/common/common.module';
import { ConfigService } from '@app/common/config.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from '@app/database/database.module';
import { SessionSerializer } from '@app/auth/session.serializer';

@Module({
  controllers: [AuthController],
  providers: [AuthStrategy, AuthJwtStrategy, SessionSerializer],
  imports: [
    PassportModule,
    DatabaseModule,
    CommonModule,
    JwtModule.registerAsync({
      imports: [CommonModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          signOptions: { expiresIn: configService.getConfig('appAuthExpiresIn') },
          secret: configService.getConfig('appSecret'),
        };
      },
    }),
  ],
})
export class AuthModule {}
