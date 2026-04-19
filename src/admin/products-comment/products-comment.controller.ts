import {
  Controller,
  Get,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { ProductsCommentService } from './products-comment.service';
import { IProductsComment } from './entities/products-comment.entity';

@Controller('admin/products-comment')
export class ProductsCommentController {
  constructor(
    private readonly productsCommentService: ProductsCommentService,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<IProductsComment[]> {
    return this.productsCommentService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') _id: string): Promise<IProductsComment> {
    const brand = await this.productsCommentService.findOne(_id);
    if (!brand) {
      throw new NotFoundException();
    }
    return brand;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') _id: string): Promise<void> {
    const result = await this.productsCommentService.delete(_id);
    if (!result) {
      throw new NotFoundException();
    }
  }
}
