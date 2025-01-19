import { NestFactory } from '@nestjs/core';
import { ServiceModule } from './service.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const service = await NestFactory.create(ServiceModule);
  service.useGlobalPipes(new ValidationPipe());
  console.log('Service is running on port : ', process.env.PORT);
  await service.listen(process.env.PORT ?? 3000);
}
bootstrap();
