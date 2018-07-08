import { NestFactory } from '@nestjs/core';
import { AppModule } from 'modules/app.module';

import * as express from 'express';//使用express模組

async function bootstrap() {
  const instance = express();
  const app = await NestFactory.create(AppModule,instance);
  await app.listen(3000, ()=> {
    console.log('Application based on Express is listening on port 3000')
  });
}
bootstrap();
