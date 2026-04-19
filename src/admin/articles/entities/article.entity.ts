import mongoose, { Schema, Document } from 'mongoose';

export interface IArticle extends Document {
  // _id: string;
  title: string;
  articlesCategoryId: Schema.Types.ObjectId;
  description: string;
}

export const ArticleSchema: Schema<IArticle> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    articlesCategoryId: {
      type: Schema.Types.ObjectId,
      ref: 'ArticlesCategory',
      required: true,
      index: true,
    },
    description: {
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
