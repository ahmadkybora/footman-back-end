import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserFavorite } from 'src/admin/users/entities/user.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel('UserFavorite')
    private readonly userFavoriteRepository: Model<IUserFavorite>,
  ) {}

  async create(createFavoriteDto: CreateFavoriteDto) {
    const { productId } = createFavoriteDto;
    const favorited = await this.userFavoriteRepository.findOne({ productId });
    if (favorited) {
      return this.userFavoriteRepository.findOneAndDelete({ productId });
    }
    const payload = {
      productId,
      userId: '69c5121360d4bcbc54a3a6e6',
    };
    return this.userFavoriteRepository.create(payload);
  }

  findAll() {
    return this.userFavoriteRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
