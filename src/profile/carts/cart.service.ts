import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart-dto';
import { ICart } from './entities/cart.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CartService {
  constructor(
    @InjectModel('Carts')
    private cartRepository: Model<ICart>,
  ) {}

  async findAll(): Promise<ICart[] | any> {
    let totalPrice: number = 0;
    const carts = await this.cartRepository
      .find()
      .populate({ path: 'productId', select: 'price title _id' })
      .populate({ path: 'userId', select: 'userName _id' });

    carts.forEach((cart) => {
      totalPrice += Number(cart.productId['price']);
    });
    return { carts, totalPrice };
  }

  async create(createCartDto: CreateCartDto): Promise<ICart> {
    return this.cartRepository.create(createCartDto);
  }

  async delete(_id: string): Promise<boolean | any> {
    const result = await this.cartRepository.findOneAndDelete({ _id });
    return result;
  }
}
