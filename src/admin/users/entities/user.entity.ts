import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  // _id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}

export interface IToken extends Document {
  // _id: string;
  token: string;
  // blacklistedAt: Date;
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

// const User = mongoose.models.User || mongoose.model<IUser>('Users', userSchema);

// export default User;
