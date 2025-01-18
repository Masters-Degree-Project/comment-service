import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export default class CommentDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsString()
  comment: string;
}
