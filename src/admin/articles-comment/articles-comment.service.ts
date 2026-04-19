import { Injectable } from '@nestjs/common';

import { IArticlesComment } from './entities/articles-comment.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ArticlesCommentService {
  constructor(
    @InjectModel('ArticleComment')
    private articlesCommentRepository: Model<IArticlesComment>,
  ) {}

  async findAll(): Promise<IArticlesComment[]> {
    return this.articlesCommentRepository.find();
  }
  async findOne(_id: string): Promise<IArticlesComment | null> {
    return await this.articlesCommentRepository.findOne({ _id });
  }

  async delete(_id: string): Promise<boolean | any> {
    const result = await this.articlesCommentRepository.findOneAndDelete({ _id });
    return result;
  }
}
