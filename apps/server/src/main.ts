import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.NEST_APP_PORT || 3001;
  const prefix = process.env.NEST_APP_GLOBAL_PREFIX || ''
  app.setGlobalPrefix(prefix);
  app.enableCors();
  await app.listen(port);
}
bootstrap();
