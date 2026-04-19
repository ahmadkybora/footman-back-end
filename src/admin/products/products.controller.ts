import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { IProduct } from './entities/product.entity';
import { SearchProductDto } from './dto/search-product-dto';
import { CreateProductDto } from './dto/create-product-dto';
import { UpdateProductDto } from './dto/update-product-dto';

@Controller('admin/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll()/*: Promise<IProduct[]>*/ {
    return this.productsService.filterCategory();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') _id: string): Promise<IProduct> {
    const brand = await this.productsService.findOne(_id);
    if (!brand) {
      throw new NotFoundException();
    }
    return brand;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProductDto: CreateProductDto): Promise<IProduct> {
    try {
      return await this.productsService.create(createProductDto);
    } catch (error) {
      if (error?.code === 11000) {
        throw new BadRequestException(error);
      }
      throw error;
    }
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') _id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<IProduct> {
    const updatedBrand = await this.productsService.update(_id, updateProductDto);
    if (!updatedBrand) {
      throw new NotFoundException();
    }
    return updatedBrand;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') _id: string): Promise<void> {
    const result = await this.productsService.delete(_id);
    if (!result) {
      throw new NotFoundException();
    }
  }

  @Post('/search')
  search(@Body() searchProductDto: SearchProductDto) {
    return this.productsService.search(searchProductDto);
  }
}
