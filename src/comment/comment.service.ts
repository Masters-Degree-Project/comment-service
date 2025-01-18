import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './comment.schema';
import { Model } from 'mongoose';
import CommentDto from './comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}

  getCommentsByTaskId(taskId: string) {
    return this.commentModel.find({ taskId }).exec();
  }

  async createCommentToTask(taskId: string, commentDto: CommentDto) {
    return this.commentModel.create({
      taskId,
      userId: commentDto.userId,
      comment: commentDto.comment,
    });
  }
}
