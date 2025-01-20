import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentModule } from './comment/comment.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { ConsulModule } from './consul/consul.module';
import { GracefulShutdownModule } from 'nestjs-graceful-shutdown';

@Module({
  imports: [
    GracefulShutdownModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/comments-service'),
    ConfigModule.forRoot(),
    CommentModule,
    JwtModule.register({
      global: true,
    }),
    ConsulModule,
  ],
})
export class ServiceModule {}
