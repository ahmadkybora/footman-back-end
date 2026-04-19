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
import { ArticlesService } from './articles.service';
import { IArticle } from './entities/article.entity';
import { SearchArticleDto } from './dto/search-article-dto';
import { CreateArticleDto } from './dto/create-article-dto';
import { UpdateArticleDto } from './dto/update-article-dto';

@Controller('admin/articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<IArticle[]> {
    return this.articlesService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') _id: string): Promise<IArticle> {
    const brand = await this.articlesService.findOne(_id);
    if (!brand) {
      throw new NotFoundException();
    }
    return brand;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createArticleDto: CreateArticleDto): Promise<IArticle> {
    try {
      return await this.articlesService.create(createArticleDto);
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
    @Body() updateArticleDto: UpdateArticleDto,
  ): Promise<IArticle> {
    const updatedBrand = await this.articlesService.update(_id, updateArticleDto);
    if (!updatedBrand) {
      throw new NotFoundException();
    }
    return updatedBrand;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') _id: string): Promise<void> {
    const result = await this.articlesService.delete(_id);
    if (!result) {
      throw new NotFoundException();
    }
  }

  @Post('/search')
  search(@Body() searchArticleDto: SearchArticleDto) {
    return this.articlesService.search(searchArticleDto);
  }
}
