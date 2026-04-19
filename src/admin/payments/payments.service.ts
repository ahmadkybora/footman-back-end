import { Injectable } from '@nestjs/common';
// import { IPayment } from './entities/payment.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IPayment } from 'src/profile/payments/entities/payment.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectModel('Payments')
    private paymentsRepository: Model<IPayment>,
  ) {}

  async findAll(): Promise<IPayment[]> {
    return this.paymentsRepository.find();
  }

  async findOne(_id: string): Promise<IPayment | null> {
    return await this.paymentsRepository.findOne({ _id });
  }
}
