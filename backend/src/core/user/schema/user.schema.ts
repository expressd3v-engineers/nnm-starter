import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

export type IUser = User & Document;

@Schema({ autoIndex: true })
export class User {
  @Prop({ required: true, index: true, unique: true })
  id: string;

  @Prop({ required: true, index: true, unique: true })
  email: string;

  @Prop({ index: true })
  phone: string;

  @Prop({ index: true })
  firstName: string;

  @Prop({ index: true })
  lastName: string;

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
