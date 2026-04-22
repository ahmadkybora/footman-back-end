import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductsCategoryDto } from './dto/create-products-category.dto';
import { UpdateProductsCategoryDto } from './dto/update-products-category.dto';
import { SearchProductsCategoryDto } from './dto/search-products-category.dto';
import { IProductsCategory } from './entities/products-category.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsCategoryService {
  constructor(
    @InjectModel('ProductsCategory')
    private productsCategoryRepository: Model<IProductsCategory>,
  ) {}

  async findAll(query: any): Promise<IProductsCategory[]> {
    const { brandId } = query;
    console.log('brandId', brandId)
    if (!brandId)
      return this.productsCategoryRepository.find();
    return this.productsCategoryRepository.find({ brandId });
  }

  async findOne(_id: string): Promise<IProductsCategory | null> {
    const brand = await this.productsCategoryRepository.findOne({ _id });
    return brand;
  }

  async create(createProductsCategoryDto: CreateProductsCategoryDto): Promise<IProductsCategory> {
    return this.productsCategoryRepository.create(createProductsCategoryDto);
  }

  async update(_id: string, updateProductsCategoryDto: UpdateProductsCategoryDto): Promise<IProductsCategory | null> {
    return await this.productsCategoryRepository.findOneAndUpdate(
      { _id },
      { $set: updateProductsCategoryDto },
      { new: true },
    );
  }

  async delete(_id: string): Promise<boolean | any> {
    return await this.productsCategoryRepository.findOneAndDelete({ _id });
  }

  async search(searchProductsCategoryDto: SearchProductsCategoryDto) {
    const { search } = searchProductsCategoryDto;
    const books = search

    return books;
  }
}
