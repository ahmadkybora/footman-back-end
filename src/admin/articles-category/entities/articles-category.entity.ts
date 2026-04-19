import mongoose, { Schema, Document } from 'mongoose';

export interface IArticlesCategory extends Document {
  // _id: string;
  title: string;
  qty: number;
}

export const ArticlesCategorySchema: Schema<IArticlesCategory> = new Schema(
  {
    title: {
      type: String,
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
