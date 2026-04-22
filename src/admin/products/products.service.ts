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
    @InjectModel('Product')
    private readonly productsRepository: Model<IProduct>,
    @InjectModel('ProductsCategory')
    private readonly productsCategoryRepository: Model<IProductsCategory>,
    @InjectModel('Brand')
    private readonly brandsRepository: Model<IBrand>,
  ) {}

  async findAll(query: string)/*: Promise<IProduct[]>*/ {
    // return await this.filter(query);
    // return await this.getBrandWithAllCategory(query);
    // console.log('query', query);
    // // return await this.filterKeshoyi();
    // if (query) {
    //   return await this.filter(query);
    // } else {
      return this.productsRepository
        .find()
        .populate('brandId', 'title')
        .populate('productsCategoryId', 'title');
    // }
  }

  async findOne(_id: string): Promise<IProduct | null> {
    return await this.productsRepository.findOne({ _id });
  }

  async create(createProductDto: CreateProductDto): Promise<IProduct> {
    console.log('createProductDto', createProductDto);
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

  async filter(query: any) {
    let { brandId, categoryId, minPrice, maxPrice, sort } = query;
    if (brandId) {
      brandId = brandId.split(',');
    }
    if (categoryId) {
      categoryId = categoryId.split(',');
    }
    const match: any = {};
    if (brandId && brandId.length > 0) match.brandId = { $in: brandId };
    if (categoryId && categoryId.length > 0) match.categoryId = { $in: categoryId };
    if (minPrice || maxPrice) {
      match.price = {};
      if (minPrice) match.price.$gte = Number(minPrice);
      if (maxPrice) match.price.$lte = Number(maxPrice);
    }

    let sortStage: any = {};
    if (sort === 'price_asc') sortStage.price = 1;
    else if (sort === 'price_desc') sortStage.price = -1;
    else if (sort === 'fav_asc') sortStage.fav = 1;
    else if (sort === 'pay_asc') sortStage.pay = 1;

    const pipeline: any[] = [{ $match: match }];

    if (Object.keys(sortStage).length > 0) {
      pipeline.push({ $sort: sortStage });
    }
    const s = await this.productsRepository.aggregate(pipeline);
    // console.log('pipeline', pipeline);
    // console.log('match', match);
    // console.log('s', s);
    return this.productsRepository.aggregate(pipeline);
  }

  async filter12(query: any) {
    const { sort, minPrice, maxPrice, brand, category } = query;
    if (brand) {
      return await this.productsRepository.find({ brandId: brand });
    } else if (category) {
      return await this.productsRepository.find({ productsCategoryId: category });
    } else if (minPrice && maxPrice) {
      return this.productsRepository.aggregate([
        { $match: { price: { $gte: Number(minPrice), $lte: Number(maxPrice) } } },
        { $sort: { price: 1 } },
      ]);
    } else if (sort === 'geran') {
      return this.productsRepository.aggregate([{ $sort: { price: 1 } }]);
    } else if (sort === 'arzan') {
      return this.productsRepository.aggregate([{ $sort: { price: -1 } }]);
    }
  }

  // const brandId = await this.brandsRepository
  //   .findOne({ title: brand })
  //   .select('_id');
  // const productsCategoryId = await this.productsCategoryRepository
  //   .find({ brandId })
  //   .select('_id');
  // const productsCategoryId = await this.productsCategoryRepository
  //   .findOne({ title: category })
  //   .select('_id');
  // return await this.productsRepository.find({
  //   productsCategoryId: { $in: productsCategoryId },
  // });
  async filter1(query: any)/*: Promise<IProduct[]>*/ {
    const { sort } = query;
    // console.log("sort");
    // console.log('sort', JSON.stringify(sort));
    if (sort === 'geran') {
      return this.productsRepository.aggregate([{ $sort: { price: 1 } }]);
    } else if (sort === 'arzan') {
      return this.productsRepository.aggregate([{ $sort: { price: -1 } }]);
    }
  }

  async filterKeshoyi(): Promise<IProduct[]> {
    const minPrice = 100;
    const maxPrice = 400;
    return this.productsRepository.aggregate([
      { $match: { price: { $gte: minPrice, $lte: maxPrice } } },
      { $sort: { price: 1 } },
    ]);
  }

  async filterBrand() {
    const title = 'sx';
    const brandId = await this.brandsRepository
      .findOne({ title })
      .select('_id');
    // console.log('brandId', brandId);
    const productsCategoryId = await this.productsCategoryRepository
      .find({ brandId })
      .select('_id');
    // console.log('productsCategoryId', productsCategoryId);
    return await this.productsRepository.find({
      productsCategoryId: { $in: productsCategoryId },
    });
  }

  async filterCategory() {
    const title = 'sx';
    const productsCategoryId = await this.productsCategoryRepository
      .findOne({ title })
      .select('_id');
    // console.log('brandId', brandId);
    // const productsCategoryId = await this.productsCategoryRepository
    //   .find({ brandId })
    //   .select('_id');
    // console.log('productsCategoryId', productsCategoryId);
    return await this.productsRepository.find({
      productsCategoryId: { $in: productsCategoryId },
    });
    // console.log('products', products);
    // return this.productsRepository.find()
    //   .populate({ path: 'productId', select: 'price title _id' })
    //   .populate({ path: 'userId', select: 'userName _id' });
  }

  async getBrandWithAllCategory(query: any) {
    const { cat } = query;
    // console.log(cat)
    if (!cat) {
      return this.brandsRepository.find();
    }
    const brandId = await this.brandsRepository
      .findOne({ title: cat })
      .select('_id');
    const productsCategoryId = await this.productsCategoryRepository
      .find({ brandId })
      .select('_id');
    return await this.productsRepository.find({
      productsCategoryId: { $in: productsCategoryId },
    });
  }
}
