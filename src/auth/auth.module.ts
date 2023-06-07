import { Module } from '@nestjs/common';
import { AuthJwtStrategy, AuthStrategy } from '@app/auth/auth.strategy';
import { AuthController } from '@app/auth/auth.controller';
import { CommonModule } from '@app/common/common.module';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from '@app/database/database.module';
import { SessionSerializer } from '@app/auth/session.serializer';
import { JwtProvider } from '@app/common/jwt.provider';

@Module({
  controllers: [AuthController],
  providers: [AuthStrategy, AuthJwtStrategy, SessionSerializer],
  imports: [PassportModule, DatabaseModule, CommonModule, JwtProvider],
})
export class AuthModule {}

export interface JwtPayload {
  sub: string;
  username: string;
}
