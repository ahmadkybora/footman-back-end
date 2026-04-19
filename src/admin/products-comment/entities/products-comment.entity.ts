import mongoose, { Schema, Document } from 'mongoose';

export interface IProductsComment extends Document {
  // _id: string;
  title: string;
  productId: Schema.Types.ObjectId;
}

export const ProductsCommentSchema: Schema<IProductsComment> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
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
