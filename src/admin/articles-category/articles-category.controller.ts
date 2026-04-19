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
import { ArticlesCategoryService } from './articles-category.service';
import { IArticlesCategory } from './entities/articles-category.entity';
import { SearchArticlesCategoryDto } from './dto/search-articles-category-dto';
import { CreateArticlesCategoryDto } from './dto/create-articles-category-dto';
import { UpdateArticlesCategoryDto } from './dto/update-articles-category-dto';

@Controller('admin/articles-category')
export class ArticlesCategoryController {
  constructor(private readonly articlesCategoryService: ArticlesCategoryService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<IArticlesCategory[]> {
    return this.articlesCategoryService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') _id: string): Promise<IArticlesCategory> {
    const brand = await this.articlesCategoryService.findOne(_id);
    if (!brand) {
      throw new NotFoundException();
    }
    return brand;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createArticlesCategoryDto: CreateArticlesCategoryDto): Promise<IArticlesCategory> {
    try {
      return await this.articlesCategoryService.create(createArticlesCategoryDto);
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
    @Body() updateArticlesCategoryDto: UpdateArticlesCategoryDto,
  ): Promise<IArticlesCategory> {
    const updatedBrand = await this.articlesCategoryService.update(_id, updateArticlesCategoryDto);
    if (!updatedBrand) {
      throw new NotFoundException();
    }
    return updatedBrand;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') _id: string): Promise<void> {
    const result = await this.articlesCategoryService.delete(_id);
    if (!result) {
      throw new NotFoundException();
    }
  }

  @Post('/search')
  search(@Body() searchArticlesCategoryDto: SearchArticlesCategoryDto) {
    return this.articlesCategoryService.search(searchArticlesCategoryDto);
  }
}
