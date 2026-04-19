import { PartialType } from '@nestjs/swagger';
import { CreateProductsCommentDto } from './create-products-comment.dto';

export class UpdateProductsCommentDto extends PartialType(CreateProductsCommentDto) {}
