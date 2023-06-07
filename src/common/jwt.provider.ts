import { JwtModule } from '@nestjs/jwt';
import { CommonModule } from '@app/common/common.module';
import { ConfigService } from '@app/common/config.service';

export const JwtProvider = JwtModule.registerAsync({
  imports: [CommonModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    return {
      signOptions: { expiresIn: configService.getConfig('appAuthExpiresIn') },
      secret: configService.getConfig('appSecret'),
    };
  },
});
