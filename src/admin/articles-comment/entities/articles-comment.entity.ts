import mongoose, { Schema, Document } from 'mongoose';

export interface IArticlesComment extends Document {
  // _id: string;
  title: string;
  articleId: Schema.Types.ObjectId;
}

export const ArticlesCommentSchema: Schema<IArticlesComment> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    articleId: {
      type: Schema.Types.ObjectId,
      ref: 'Article',
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

// const ProductCategory =
//   mongoose.models.ProductCategory ||
//   mongoose.model<IProductCategory>('productCategories', productCategorySchema);

// export default ProductCategory;
