import mongoose, { Schema, Document } from 'mongoose';

export interface IBrand extends Document {
  // _id: string;
  title: string;
}

export const BrandSchema: Schema<IBrand> = new Schema(
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

// const Brand =
//   mongoose.models.Brand || mongoose.model<IBrand>('Brands', brandSchema);

// export default Brand;
