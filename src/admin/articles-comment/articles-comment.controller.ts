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
import { ArticlesCommentService } from './articles-comment.service';
import { IArticlesComment } from './entities/articles-comment.entity';

@Controller('admin/articles-comment')
export class ArticlesCommentController {
  constructor(
    private readonly articlesCommentService: ArticlesCommentService,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<IArticlesComment[]> {
    return this.articlesCommentService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') _id: string): Promise<IArticlesComment> {
    const brand = await this.articlesCommentService.findOne(_id);
    if (!brand) {
      throw new NotFoundException();
    }
    return brand;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') _id: string): Promise<void> {
    const result = await this.articlesCommentService.delete(_id);
    if (!result) {
      throw new NotFoundException();
    }
  }
}
