import { Injectable } from '@nestjs/common';
import { Connection, Model } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '@app/database/schemas/user';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private configService: ConfigService,
    // for native mongodb
    @InjectConnection() private connection: Connection,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = new this.userModel(createUserDto);

    return user.save();
  }

  async findOneByInstagramId(instagramId: string): Promise<User> {
    return this.userModel.findOne({ instagramId }).exec();
  }

  async updateOneByInstagramId(
    instagramId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<void> {
    await this.userModel.updateOne({ instagramId }, updateUserDto).exec();
  }
}

interface CreateUserDto {
  instagramId: string;
  instagramUsername: string;
  instagramAccessToken: string;
  instagramAccessTokenExpiresAt: Date;
}

interface UpdateUserDto {
  instagramAccessTokenExpiresAt: Date;
  instagramUsername: string;
  instagramAccessToken: string;
}
