import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Database } from './database/database';
import 'reflect-metadata';

async function bootstrap() {
  await Database.initialize();

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
