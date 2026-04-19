export class Setting {}
import mongoose, { Schema, Document } from 'mongoose';

export interface ISetting extends Document {
  // _id: string;
  title: string;
}

export const SettingSchema: Schema<ISetting> = new Schema(
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
