import { Module } from '@nestjs/common';
import { AuthInstagramStrategy } from '@app/auth/auth-instagram.strategy';
import { AuthController } from '@app/auth/auth.controller';
import { CommonModule } from '@app/common/common.module';
import { ConfigService } from '@app/common/config.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthJwtStrategy } from '@app/auth/auth-jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthInstagramStrategy, AuthJwtStrategy],
  imports: [
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
