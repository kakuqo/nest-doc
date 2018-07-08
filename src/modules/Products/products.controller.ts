import { Controller, Get, Post, Request, Response, Next, HttpStatus, Param, Body } from "@nestjs/common";
import { CreateProductDTO } from "./DTO/create-products.dto";
import { ProductsService } from "./Services/products.service";


@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) { }

    @Get()
    async getAllUsers(@Response() res) {
        const users = await this.productsService.getAllProducts().catch(err => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        });
        res.status(HttpStatus.OK).json(users);
    }

    @Get(':id')
    async getUsers(@Response() res, @Param('id') id) {
        const user = await this.productsService.getProduct(+id).catch(err => {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR);
        })
        res.status(HttpStatus.OK).json(user);
    }

    @Post()
    addUser(@Response() res, @Body() createProductDTO: CreateProductDTO) {
        this.productsService.addProduct(createProductDTO).subscribe(product => {
            res.status(HttpStatus.OK).json(product);
        })
    }
}