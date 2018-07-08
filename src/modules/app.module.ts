import { Module, NestModule, MiddlewareConsumer, UseFilters } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { LoggerMiddleware } from './Shared/Middlewares/logger.middleware';
import { UsersController } from './Users/users.controller';
import { ProductsController } from './Products/products.controller';
import { SimpleMiddleware } from './Shared/Middlewares/simple.middleware';
import { HttpExceptionFilter } from './Shared/ExceptionFilters/http-exception.filter';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: []
})
@UseFilters(new HttpExceptionFilter())
export class AppModule implements NestModule {
   configure(consumer: MiddlewareConsumer):void {
     consumer.apply(LoggerMiddleware,SimpleMiddleware)
     .with('来自跟模块的参数')
     .forRoutes(
      UsersController,
      ProductsController
     )
   }
}
