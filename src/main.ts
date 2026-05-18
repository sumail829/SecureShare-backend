import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // removes extra fields
      forbidNonWhitelisted: true, // throws error if extra fields sent
      transform: true, // converts request to DTO class
    }),
  );

  await app.listen(4000);
}
bootstrap();