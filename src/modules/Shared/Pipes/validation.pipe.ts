import { Pipe, PipeTransform, ArgumentMetadata } from "@nestjs/common";

@Pipe()
export class ValidationPipe implements PipeTransform<any> {
    transform(value:any,metadata:ArgumentMetadata) {
        return value;
    }
}