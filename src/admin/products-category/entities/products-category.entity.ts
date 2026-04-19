import mongoose, { Schema, Document } from 'mongoose';

export interface IProductsCategory extends Document {
  // _id: string;
  title: string;
  brandId: Schema.Types.ObjectId;
}

export const ProductsCategorySchema: Schema<IProductsCategory> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    brandId: {
      type: Schema.Types.ObjectId,
      ref: 'Brand',
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
