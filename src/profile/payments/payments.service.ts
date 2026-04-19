import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { IPayment } from './entities/payment.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from 'src/admin/users/entities/user.entity';
import { ICart } from '../carts/entities/cart.entity';
import { IProduct } from 'src/admin/products/entities/product.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel('Payments')
    private paymentsRepository: Model<IPayment>,
    @InjectModel('Users')
    private usersRepository: Model<IUser>,
    @InjectModel('Carts')
    private cartsRepository: Model<ICart>,
    @InjectModel('Products')
    private productsRepository: Model<IProduct>,
  ) {}

  async findAll(): Promise<IPayment[]> {
    return this.paymentsRepository.find({ userId: "69c5121360d4bcbc54a3a6e6" });
  }

  async findOne(_id: string): Promise<IPayment | null> {
    return await this.paymentsRepository.findOne({ _id });
  }

  async create(createPaymentDto: CreatePaymentDto): Promise<IPayment | any> {
    try {
      const { userId } = createPaymentDto;
      const user = await this.usersRepository.findOne({ _id: userId });
      if (!user) {
        throw new NotFoundException('کاربر یافت نشد');
      }
      const carts = await this.cartsRepository.find({ userId }).exec();
      let totalAmount: number = 0;
      const productsData: any = [];
      for (const cart of carts) {
        const products = await this.productsRepository.find({ _id: { $in: cart.productId }}).exec();

        for (const product of products) {
          productsData.push({ productId: product._id, price: product.price });
          totalAmount += Number(product.price);
        }
      }
      const payment = new this.paymentsRepository({
        totalAmount,
        userId,
        products: productsData,
      });

      await payment.save();

      for (const cart of carts) {
        await this.cartsRepository.findOneAndDelete({ userId: cart.userId }).exec();
      }

      return payment;
    } catch (error) {
      console.error("خطا در ایجاد پرداخت:", error); throw error;
    }
  }
}
