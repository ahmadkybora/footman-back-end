import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  HttpStatus,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { IPayment } from './entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Controller('profile/payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<IPayment[]> {
    return this.paymentsService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') _id: string): Promise<IPayment> {
    const brand = await this.paymentsService.findOne(_id);
    if (!brand) {
      throw new NotFoundException();
    }
    return brand;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createPaymentDto: CreatePaymentDto): Promise<IPayment> {
    try {
      // console.log("createPaymentDto", createPaymentDto);
      return await this.paymentsService.create(createPaymentDto);
    } catch (error) {
      if (error?.code === 11000) {
        throw new BadRequestException(error);
      }
      throw error;
    }
  }
}
