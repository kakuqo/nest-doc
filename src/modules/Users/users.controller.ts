import { Controller, Get, Post, Response, Next, HttpStatus, Param, Body, HttpException, UseFilters } from "@nestjs/common";
import { CreateUserDTO } from "./DTO/create-users.dto";
import { UsersService } from "./Services/users.service";
import { ProductsService } from "../Products/Services/products.service";
import { CustomForbiddenException } from "../Shared/ExceptionFilters/forbidden.exception";
import { HttpExceptionFilter } from "../Shared/ExceptionFilters/http-exception.filter";


@Controller()
@UseFilters(new HttpExceptionFilter())
export class UsersController {

    constructor(
        private usersService: UsersService,
        private productsService: ProductsService,
    ) { }

    @Get('users')
    async getAllUsers(@Response() res) {
        const users = await this.usersService.getAllUsers().catch(err => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        });
        res.status(HttpStatus.OK).json(users);
    }

    @Get('users/:id')
    async getUsers(@Response() res, @Param('id') id) {
        const user = await this.usersService.getUser(+id).catch(err => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        })
        res.status(HttpStatus.OK).json(user);
    }

    @Post('users')
    addUser(@Response() res, @Body() createUserDTO: CreateUserDTO) {
        this.usersService.addUser(createUserDTO).subscribe(users => {
            res.status(HttpStatus.OK).json(users);
        })
    }

    @Get('products')
    async getAllProducts(@Response() res) {
        const products = await this.productsService.getAllProducts().catch(err => {
            //多種Http的Status可以使用
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        })
        res.status(HttpStatus.OK).json(products);
    }

    @Get('getException')
    //使用HttpExceptionFilter
    @UseFilters(new HttpExceptionFilter())
    async getException(@Response() res) {
        //直接拋錯，Nestjs有ExceptionsHandler 會主動捕捉錯誤。
        throw new CustomForbiddenException();
    }

}