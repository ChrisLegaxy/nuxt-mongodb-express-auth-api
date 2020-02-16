/**
 * @file
 *
 * @description
 *
 * @author       Chris <chris.legaxy@gmail.com>
 * @copyright    CPC
 * @since        1.0.0
 * @version      1.0.0
 */

import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

import IUser from '../interfaces/models/User';

export interface IModelUser extends IUser, mongoose.Document {
  comparePassword(password: String, bcryptCompareResult: any): String;
}

/**
 * Define user schema
 */
export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

/**
 * Password hash middleware
 */
UserSchema.pre<IModelUser>('save', function(next): any {
  if (this.password && this.isModified('password')) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        next(err);
      }

      /** Hash */
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
          next(err);
        }

        this.password = hash;
        next();
      });
    });
  }
});

UserSchema.methods.comparePassword = function(
  password: string,
  bcryptCompareResult: Function
): any {
  bcrypt.compare(
    password,
    this.password,
    (err: Error, isMatched: Boolean): Function => {
      return bcryptCompareResult(err, isMatched);
    }
  );
};

/**
 * Model user schema
 */
const User = mongoose.model<IModelUser>('User', UserSchema);

export default User;
