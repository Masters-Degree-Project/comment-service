import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CommentService } from './comment.service';
import CommentDto from './comment.dto';
import { ServiceGuard } from 'src/service.guard';

@UseGuards(ServiceGuard)
@Controller({ path: 'api/v1/comments' })
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get(':taskId')
  taskComments(@Param('taskId') taskId: string) {
    return this.commentService.getCommentsByTaskId(taskId);
  }

  @Post(':taskId')
  async createComment(
    @Param('taskId') taskId: string,
    @Body() commentDto: CommentDto,
  ) {
    try {
      const comment = await this.commentService.createCommentToTask(
        taskId,
        commentDto,
      );

      return {
        id: comment.id,
        status: 'success',
      };
    } catch (e) {
      return {
        status: 'failed',
        message: e.message,
      };
    }
  }
}
