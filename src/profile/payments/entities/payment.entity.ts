export class Payment {}
import mongoose, { Schema, Document } from 'mongoose';

export interface IPayment extends Document {
  // _id: string;
  totalAmount: string;
  userId: Schema.Types.ObjectId;
  products: {
    productId: Schema.Types.ObjectId;
    price: number;
  };
}

export const PaymentSchema: Schema<IPayment> = new Schema(
  {
    totalAmount: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    products: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

// const Product =
//   mongoose.models.Product || mongoose.model<IProduct>('product', productSchema);

// export default Product;
