import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  id: string;

  @Prop({ required: true, index: 1 })
  userId: number;

  @Prop({ required: true, index: 1 })
  taskId: number;

  @Prop({ required: true })
  comment: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);

CommentSchema.index({ userId: 1, taskId: 1 });

export const CommentsMongooseModule = MongooseModule.forFeature([
  { name: Comment.name, schema: CommentSchema },
]);
