import { NestFactory } from '@nestjs/core';
import { ServiceModule } from './service.module';
import { ValidationPipe } from '@nestjs/common';
import { setupGracefulShutdown } from 'nestjs-graceful-shutdown';

async function bootstrap() {
  const service = await NestFactory.create(ServiceModule);
  service.useGlobalPipes(new ValidationPipe());

  setupGracefulShutdown({ app: service });

  console.log('Service is running on port : ', process.env.PORT);
  await service.listen(process.env.PORT ?? 3000);

  setTimeout(() => {
    process.kill(process.pid, 'SIGTERM');
  }, 5000);
}

bootstrap();
