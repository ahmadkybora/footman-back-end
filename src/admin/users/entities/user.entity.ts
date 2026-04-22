import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  // _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  favorites: {
    productId: Schema.Types.ObjectId;
  };
}

export interface IToken extends Document {
  // _id: string;
  token: string;
  // blacklistedAt: Date;
}

export interface IUserFavorite extends Document {
  productId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
}

export const UserSchema: Schema<IUser> = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const TokenSchema: Schema<IToken> = new Schema(
  {
    token: {
      type: String,
      required: true,
      unique: true,
    },
    // blacklistedAt: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  {
    timestamps: true,
  },
);

export const UserFavoriteSchema: Schema<IUserFavorite> = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
      index: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
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
