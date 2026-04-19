import { Injectable } from '@nestjs/common';

import { IProductsComment } from './entities/products-comment.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsCommentService {
  constructor(
    @InjectModel('ProductComment')
    private productsCommentRepository: Model<IProductsComment>,
  ) {}

  async findAll(): Promise<IProductsComment[]> {
    return this.productsCommentRepository.find();
  }
  async findOne(_id: string): Promise<IProductsComment | null> {
    return await this.productsCommentRepository.findOne({ _id });
  }

  async delete(_id: string): Promise<boolean | any> {
    const result = await this.productsCommentRepository.findOneAndDelete({ _id });
    return result;
  }
}
