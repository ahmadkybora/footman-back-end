import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentSchema } from './entities/payment.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/admin/users/entities/user.entity';
import { CartSchema } from '../carts/entities/cart.entity';
import { ProductSchema } from 'src/admin/products/entities/product.entity';

@Module({
  // imports: [TypeOrmModule.forFeature([Product])],
  imports: [
    MongooseModule.forFeature([{ name: 'Payments', schema: PaymentSchema }]),
    MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Carts', schema: CartSchema }]),
    MongooseModule.forFeature([{ name: 'Products', schema: ProductSchema }]),
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
