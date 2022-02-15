import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  await app.listen(8000);
}
bootstrap().then(() => {
  console.log(
    '...............................  SERVER STARTED!  ............................',
  );
});
