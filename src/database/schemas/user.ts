import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type UserDocument = mongoose.HydratedDocument<User>;

@Schema()
export class User {
  @Prop({
    required: true,
  })
  instagramId: string;

  @Prop({
    required: true,
  })
  instagramUsername: string;

  @Prop({
    required: true,
  })
  instagramAccessToken: string;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.Date,
  })
  instagramAccessTokenExpiresAt: Date;

  @Prop({
    type: mongoose.Schema.Types.Date,
    default: Date.now,
  })
  createdAt: Date;

  @Prop({
    type: mongoose.Schema.Types.Date,
    default: Date.now,
  })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
