import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  // _id: string;
  title: string;
  qty: number;
  price: number;
  brandId: Schema.Types.ObjectId;
  productsCategoryId: Schema.Types.ObjectId;
  attribute: {
    bestSell: number;
  };
}

export const ProductSchema: Schema<IProduct> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brandId: {
      type: Schema.Types.ObjectId,
      ref: 'Brand',
      required: true,
      index: true,
    },
    productsCategoryId: {
      type: Schema.Types.ObjectId,
      ref: 'ProductsCategory',
      required: true,
      index: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    attribute: {
      bestSell: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  },
);

// const Product =
//   mongoose.models.Product || mongoose.model<IProduct>('product', productSchema);

// export default Product;
