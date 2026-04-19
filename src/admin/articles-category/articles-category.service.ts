import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticlesCategoryDto } from './dto/create-articles-category-dto';
import { UpdateArticlesCategoryDto } from './dto/update-articles-category-dto';
import { SearchArticlesCategoryDto } from './dto/search-articles-category-dto';
import { IArticlesCategory } from './entities/articles-category.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArticlesCategoryService {
  constructor(
    @InjectModel('ArticlesCategory')
    private articlesCategoryRepository: Model<IArticlesCategory>,
  ) {}

  async findAll(): Promise<IArticlesCategory[]> {
    return this.articlesCategoryRepository.find();
  }
  async findOne(_id: string): Promise<IArticlesCategory | null> {
    return await this.articlesCategoryRepository.findOne({ _id });
  }

  async create(createArticlesCategoryDto: CreateArticlesCategoryDto): Promise<IArticlesCategory> {
    return this.articlesCategoryRepository.create(createArticlesCategoryDto);
  }

  async update(_id: string, updateArticlesCategoryDto: UpdateArticlesCategoryDto): Promise<IArticlesCategory | null> {
    return await this.articlesCategoryRepository.findOneAndUpdate(
      { _id },
      { $set: updateArticlesCategoryDto },
      { new: true },
    );
  }

  async delete(_id: string): Promise<boolean | any> {
    const result = await this.articlesCategoryRepository.findOneAndDelete({ _id });
    return result;
  }

  async search(searchArticlesCategoryDto: SearchArticlesCategoryDto) {
    const { search } = searchArticlesCategoryDto;
    const books = search;

    return books;
  }
}
