import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  // _id: string;
  title: string;
  qty: number;
  price: string;
  brandId: Schema.Types.ObjectId;
  productsCategoryId: Schema.Types.ObjectId;
  // setting: {
  //   rate: number;
  //   porforoshtarin: number;
  // }
}

export const ProductSchema: Schema<IProduct> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
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
  },
  {
    timestamps: true,
  },
);

// const Product =
//   mongoose.models.Product || mongoose.model<IProduct>('product', productSchema);

// export default Product;
