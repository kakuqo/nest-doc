import { HttpException, Injectable } from "@nestjs/common";
import { CreateProductDTO } from "../DTO/create-products.dto";
import { Observable, of } from "rxjs";

@Injectable()
export class ProductsService {
    private products = [
        { "_id": 1, "_name": "Michael", "_count": 25 },
        { "_id": 2, "_name": "Mary", "_count": 27 }
    ];

    getAllProducts() {
        return Promise.resolve(this.products);
    }

    getProduct(id:number) {
        const product = this.products.find(product => product._id == id);
        if(!product) {
            throw new HttpException('user not found',404)
        }
        return Promise.resolve(product);
    }

    addProduct(product: CreateProductDTO): Observable<object[]> {
        this.products.push(product);
        return of(this.products);
    }
}