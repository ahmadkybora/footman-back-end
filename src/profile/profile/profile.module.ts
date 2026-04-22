import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserFavoriteSchema } from 'src/admin/users/entities/user.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserFavorite', schema: UserFavoriteSchema },
    ]),
  ],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
