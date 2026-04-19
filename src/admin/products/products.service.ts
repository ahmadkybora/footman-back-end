import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product-dto';
import { UpdateProductDto } from './dto/update-product-dto';
import { SearchProductDto } from './dto/search-product-dto';
import { IProduct } from './entities/product.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IProductsCategory } from '../products-category/entities/products-category.entity';
import { IBrand } from '../brands/entities/brand.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products')
    private productsRepository: Model<IProduct>,
    // @InjectModel('ProductsCategory')
    // private productsCategoryRepository: Model<IProductsCategory>,
    @InjectModel('Brands')
    private brandsRepository: Model<IBrand>,
  ) {}

  async findAll(): Promise<IProduct[]> {
    return this.productsRepository.find();
  }

  async findOne(_id: string): Promise<IProduct | null> {
    return await this.productsRepository.findOne({ _id });
  }

  async create(createProductDto: CreateProductDto): Promise<IProduct> {
    return this.productsRepository.create(createProductDto);
  }

  async update(_id: string, updateProductDto: UpdateProductDto): Promise<IProduct | null> {
    return await this.productsRepository.findOneAndUpdate(
      { _id },
      { $set: updateProductDto },
      { new: true },
    );
  }

  async delete(_id: string): Promise<boolean | any> {
    const result = await this.productsRepository.findOneAndDelete({ _id });
    return result;
  }

  async search(searchProductDto: SearchProductDto) {
    const { search } = searchProductDto;
    const books = search;

    return books;
  }

  async searchAsli(): Promise<IProduct[]> {
    const searchQuery = 'l';

    return this.productsRepository.aggregate([
      { $match: { title: { $regex: searchQuery, $options: 'i' } } },
      { $sort: { price: 1 } },
    ]);
  }

  async filter(): Promise<IProduct[]> {
    return this.productsRepository.aggregate([{ $sort: { price: 1 } }]);
  }

  async filterKeshoyi(): Promise<IProduct[]> {
    const minPrice = 50;
    const maxPrice = 200;
    return this.productsRepository.aggregate([
      { $match: { price: { $gte: minPrice, $lte: maxPrice } } },
      { $sort: { price: 1 } },
    ]);
  }

  async filterCategory() {
    const brandId = await this.brandsRepository.find({ title: 'sx' }).select('_id');
    console.log("productsCategoryId", brandId)
    // return this.productsRepository.find()
    //   .populate({ path: 'productId', select: 'price title _id' })
    //   .populate({ path: 'userId', select: 'userName _id' });
  }
}
