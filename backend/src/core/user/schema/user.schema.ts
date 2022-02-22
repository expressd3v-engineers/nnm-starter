import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

export type IUser = User & Document;

@Schema({ autoIndex: true })
export class User {
  //Todo: When Id is required active
  // @Prop({ required: true, index: true, unique: true })
  // id: string;

  @Prop({ required: true, index: true, unique: true })
  email: string;

  @Prop(
    raw({
      isVerified: {
        type: Boolean,
        default: false,
      },
      code: {
        type: String,
      },
      token: {
        type: String,
      },
    }),
  )
  emailConfirm: Record<any, any>;

  @Prop({ index: true, unique: true, trim: true })
  phone: string;

  @Prop(
    raw({
      isVerified: {
        type: Boolean,
        default: false,
      },
      code: {
        type: String,
      },
    }),
  )
  phoneConfirm: Record<any, any>;

  @Prop({ index: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({
    type: String,
    enum: ['male', 'female', 'other'],
  })
  gender: string;

  @Prop()
  age: number;

  @Prop(
    raw({
      type: {
        type: String,
        default: 'Point',
      },
      coordinates: {
        type: [Number],
      },
    }),
  )
  location: Record<any, any[]>;

  //Todo: Add more document fields on here

  @Prop({ type: Date, required: true, default: Date.now })
  updatedAt: Date;

  @Prop({ type: Date, required: true, default: Date.now })
  createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
