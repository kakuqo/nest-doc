import { HttpException, HttpStatus } from "@nestjs/common";

export class CustomForbiddenException extends HttpException {
    constructor() {
        super('禁止訪問', HttpStatus.FORBIDDEN);
    }
}