import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  BadRequestException,
  NotFoundException,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from './entities/user.entity';
import { RegisterUserDto } from './dto/user.dto';
import { SearchUserDto } from './dto/search-user.dto';
import { AuthGuard } from '../../common/guards/auth/jwt-auth.guard';

@Controller('admin/users')
@UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<IUser[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') _id: string): Promise<IUser> {
    console.log("_id", _id)
    const brand = await this.usersService.findOne(_id);
    if (!brand) {
      throw new NotFoundException();
    }
    return brand;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() registerUserDto: RegisterUserDto): Promise<IUser> {
    try {
      return await this.usersService.create(registerUserDto);
    } catch (error) {
      if (error?.code === 11000) {
        throw new BadRequestException(error);
      }
      throw error;
    }
  }

  // @Put(':id')
  // @HttpCode(HttpStatus.OK)
  // async update(
  //   @Param('id') id: number,
  //   @Body() updateProductDto: UpdateProductDto,
  // ): Promise<User> {
  //   const updatedBrand = await this.productsService.update(id, updateProductDto);
  //   if (!updatedBrand) {
  //     throw new NotFoundException();
  //   }
  //   return updatedBrand;
  // }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') _id: string): Promise<void> {
    const result = await this.usersService.delete(_id);
    if (!result) {
      throw new NotFoundException();
    }
  }

  @Post('/search')
  search(@Body() searchUserDto: SearchUserDto) {
    return this.usersService.search(searchUserDto);
  }
}
