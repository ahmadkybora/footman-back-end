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
  Query,
} from '@nestjs/common';
import { ProductsCategoryService } from './products-category.service';
import { CreateProductsCategoryDto } from './dto/create-products-category.dto';
import { UpdateProductsCategoryDto } from './dto/update-products-category.dto';
import { SearchProductsCategoryDto } from './dto/search-products-category.dto';
import { IProductsCategory } from './entities/products-category.entity';

@Controller('admin/products-category')
export class ProductCategoriesController {
  constructor(
    private readonly productsCategoryService: ProductsCategoryService,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Query() query: string): Promise<IProductsCategory[]> {
    return this.productsCategoryService.findAll(query);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') _id: string): Promise<IProductsCategory> {
    const brand = await this.productsCategoryService.findOne(_id);
    if (!brand) {
      throw new NotFoundException();
    }
    return brand;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProductsCategoryDto: CreateProductsCategoryDto): Promise<IProductsCategory> {
    console.log("createProductCategoryDto", createProductsCategoryDto)
    try {
      return await this.productsCategoryService.create(createProductsCategoryDto);
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
    @Body() updateProductsCategoryDto: UpdateProductsCategoryDto,
  ): Promise<IProductsCategory> {
    const updatedBrand = await this.productsCategoryService.update(_id, updateProductsCategoryDto);
    if (!updatedBrand) {
      throw new NotFoundException();
    }
    return updatedBrand;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') _id: string): Promise<void> {
    const result = await this.productsCategoryService.delete(_id);
    if (!result) {
      throw new NotFoundException();
    }
  }

  @Post('/search')
  search(@Body() searchProductsCategoryDto: SearchProductsCategoryDto) {
    return this.productsCategoryService.search(searchProductsCategoryDto);
  }
}
