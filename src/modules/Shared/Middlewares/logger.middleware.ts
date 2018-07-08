import { Injectable, NestMiddleware, MiddlewareFunction } from "@nestjs/common";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    resolve(message:string): MiddlewareFunction {
        return (req, res, next) => {
            console.log(`${message}`);
            console.log('執行middleware...');
            //呼叫next()方法，程式才會繼續往下執行，否則將停在此階段。
            next();
        }
    }
}