import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentModule } from './comment/comment.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/comments-service'),
    ConfigModule.forRoot(),
    CommentModule,
    JwtModule.register({
      global: true,
    }),
  ],
})
export class ServiceModule {}
