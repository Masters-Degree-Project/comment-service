import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { CommentsMongooseModule } from 'src/comment/comment.schema';

@Module({
  imports: [CommentsMongooseModule],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
