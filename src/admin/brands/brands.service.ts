import { Injectable } from '@nestjs/common';
import { IBrand } from './entities/brand.entity';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { SearchBrandDto } from './dto/search-brand.dto';

@Injectable()
export class BrandsService {
  constructor(
    @InjectModel('Brands')
    private readonly brandRepository: Model<IBrand>,
    @InjectModel('ProductsCategory')
    private readonly productsCategoryRepository: Model<IBrand>,
    @InjectModel('Products')
    private readonly productsRepository: Model<IBrand>,
  ) {}

  async findAll(query: any): Promise<IBrand[]> {
    // console.log('query', query)
    // return this.brandRepository.find();
    const { cat } = query;
    // console.log(cat)
    if (!cat) {
      return this.brandRepository.find();
    }
    // const brandId = await this.brandRepository
    //   .findOne({ title: cat })
    //   .select('_id');
    console.log('cat', cat);
    return this.productsCategoryRepository.find({ brandId: cat });

    // const productsCategoryId = productsCategories.map((cat) => cat._id);
    // console.log('s', productsCategoryId);
    // console.log('productsCategoryId', this.productsRepository.find({
    //   productsCategoryId: { $in: productsCategoryId },
    // }))
    // return await this.productsRepository.find();
    // return await this.productsRepository.find({
    //   productsCategoryId: { $in: productsCategoryId },
    // });
  }
  async findOne(_id: string): Promise<IBrand | null> {
    const brand = await this.brandRepository.findOne({ _id });
    return brand;
  }

  async create(createBrandDto: CreateBrandDto): Promise<IBrand> {
    // const brand = this.brandRepository.create(createBrandDto);
    return this.brandRepository.create(createBrandDto);
  }

  async update(_id: string, updateBrandDto: UpdateBrandDto): Promise<IBrand | null> {
    return await this.brandRepository.findOneAndUpdate(
      { _id },
      { $set: updateBrandDto },
      { new: true },
    );
    // const brand = await this.findOne(_id);
    // if (!brand) {
    //   return null;
    // }

    // Object.assign(brand, updateBrandDto);
    // return this.brandRepository.save(brand);
  }

  async delete(_id: string): Promise<boolean | any> {
    return await this.brandRepository.findOneAndDelete({ _id });
  }

  async search(searchBrandDto: SearchBrandDto) {
    const { search } = searchBrandDto;
    const books = search;
    // const books = await this.brandRepository
    //   .createQueryBuilder('books')
    //   .where('books.title LIKE :search', { search: `%${search}%` })
    //   .orWhere('books.author LIKE :search', { search: `%${search}%` })
    //   .orWhere('books.genre LIKE :search', { search: `%${search}%` })
    //   .orWhere('books.publicationYear LIKE :search', { search: `%${search}%` })
    //   .getMany();

    return books;
  }
}
