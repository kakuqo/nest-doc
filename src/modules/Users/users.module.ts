import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './Services/users.service';
import { ProductsModule } from '../Products/products.module';

@Module({
    imports: [ProductsModule],
    //傳入UsersController
    controllers: [UsersController],
    //傳入UsersService
    providers: [UsersService]
})
export class UsersModule { }