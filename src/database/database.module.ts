import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@app/database/schemas/user';
import { UserService } from '@app/database/services/user.service';
import { CommonModule } from '@app/common/common.module';

@Module({
  imports: [
    CommonModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserService],
  exports: [UserService],
})
export class DatabaseModule {}
