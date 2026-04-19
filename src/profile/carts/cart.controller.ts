import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { ICart } from './entities/cart.entity';
import { CreateCartDto } from './dto/create-cart-dto';

@Controller('profile/cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<ICart[]> {
    return this.cartService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createCartDto: CreateCartDto): Promise<ICart> {
    try {
      return await this.cartService.create(createCartDto);
    } catch (error) {
      if (error?.code === 11000) {
        throw new BadRequestException(error);
      }
      throw error;
    }
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') _id: string): Promise<void> {
    console.log("id", _id);
    const result = await this.cartService.delete(_id);
    if (!result) {
      throw new NotFoundException();
    }
  }
}
