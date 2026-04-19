import mongoose, { Schema, Document } from 'mongoose';

export interface ICart extends Document {
  // _id: string;
  userId: Schema.Types.ObjectId;
  productId: Schema.Types.ObjectId;
}

export const CartSchema: Schema<ICart> = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
      required: true,
      index: true,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Products',
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

// const User = mongoose.models.User || mongoose.model<IUser>('Users', userSchema);

// export default User;
