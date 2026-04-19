import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticleDto } from './dto/create-article-dto';
import { UpdateArticleDto } from './dto/update-article-dto';
import { SearchArticleDto } from './dto/search-article-dto';
import { IArticle } from './entities/article.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectModel('Articles')
    private articlesRepository: Model<IArticle>,
  ) {}

  async findAll(): Promise<IArticle[]> {
    return this.articlesRepository.find();
  }
  async findOne(_id: string): Promise<IArticle | null> {
    return await this.articlesRepository.findOne({ _id });
  }

  async create(createArticleDto: CreateArticleDto): Promise<IArticle> {
    return this.articlesRepository.create(createArticleDto);
  }

  async update(_id: string, updateArticleDto: UpdateArticleDto): Promise<IArticle | null> {
    return await this.articlesRepository.findOneAndUpdate(
      { _id },
      { $set: updateArticleDto },
      { new: true },
    );
  }

  async delete(_id: string): Promise<boolean | any> {
    const result = await this.articlesRepository.findOneAndDelete({ _id });
    return result;
  }

  async search(searchArticleDto: SearchArticleDto) {
    const { search } = searchArticleDto;
    const books = search;

    return books;
  }
}
