// import { Module } from '@nestjs/common';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { JwtService } from '@nestjs/jwt';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
// import { BrandsModule } from 'src/admin/brands/brands.module';
// import { ProductCategoriesModule } from 'src/admin/product-categories/product-categories.module';
// import { ProductsModule } from 'src/admin/products/products.module';
// import { UsersModule } from 'src/admin/users/users.module';
// import { Connection } from 'typeorm';

// @Module({
//   imports: [
//     // ConfigModule.forRoot({
//     //   isGlobal: true,
//     // }),
//     TypeOrmModule.forRootAsync({
//       useFactory: (configService: ConfigService) => ({
//         type: 'mongodb',
//         host: configService.get<string>('DATABASE_HOST'),
//         port: configService.get<number>('DATABASE_PORT'),
//         username: configService.get<string>('DATABASE_USERNAME'),
//         password: configService.get<string>('DATABASE_PASSWORD'),
//         database: configService.get<string>('DATABASE_NAME'),
//         entities: [__dirname + '/**/*.entity{.ts,.js}'],
//         synchronize: true,
//       }),
//       inject: [ConfigService],
//     }),
//   ],
//   controllers: [],
//   providers: [JwtService],
// })
// export class DataBaseModule {
//   constructor(private readonly connection: Connection) {
//     console.log('connection status', connection.isConnected);
//   }
//   static forFeature(models: EntityClassOrSchema[]) {
//     return TypeOrmModule.forFeature(models);
//   }
// }
