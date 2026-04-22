import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './admin/users/users.module';
import { BrandsModule } from './admin/brands/brands.module';
import { ProductsModule } from './admin/products/products.module';
import { ProductsCategoryModule } from './admin/products-category/products-category.module';
// import { Connection } from 'typeorm';
import { AuthMiddleware } from './common/middlewares/auth/auth.middleware';
import { ProductsController } from './admin/products/products.controller';
import { UsersController } from './admin/users/users.controller';
import { BrandsController } from './admin/brands/brands.controller';
import { ProductCategoriesController } from './admin/products-category/products-category.controller';
import { JwtService } from '@nestjs/jwt';
// import { DataBaseModule } from './database/database.module';
import { /*ConfigModule,*/ ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
// import { JwtModule } from '@nestjs/jwt';
import { ArticlesModule } from './admin/articles/articles.module';
import { ArticlesCategoryModule } from './admin/articles-category/articles-category.module';
import { CartModule } from './profile/carts/cart.module';
import { PaymentsModule } from './profile/payments/payments.module';
import { PaymentsModule as PaymentsAdminModule } from './admin/payments/payments.module';
import { ProductsCommentModule } from './admin/products-comment/products-comment.module';
import { ArticlesCommentModule } from './admin/articles-comment/articles-comment.module';
import { SettingModule } from './admin/setting/setting.module';
import { SiteMakerModule } from './admin/site-maker/site-maker.module';
import { AclModule } from './admin/acl/acl.module';
import { ProfileModule } from './profile/profile/profile.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
    MongooseModule.forRoot('mongodb://localhost:27017/footman', {}),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     uri: configService.get('MONGODB_URI'),
    //   }),
    //   inject: [ConfigService],
    // }),
    // TypeOrmModule.forRootAsync({
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'mongodb',
    //     host: configService.get<string>('DATABASE_HOST'),
    //     port: configService.get<number>('DATABASE_PORT'),
    //     username: configService.get<string>('DATABASE_USERNAME'),
    //     password: configService.get<string>('DATABASE_PASSWORD'),
    //     database: configService.get<string>('DATABASE_NAME'),
    //     entities: [__dirname + '/**/entities/*.entity{.ts,.js}'],
    //     synchronize: true,
    //   }),
    //   inject: [ConfigService],
    // }),
    // DataBaseModule,
    UsersModule,
    BrandsModule,
    ProductsModule,
    ProductsCategoryModule,
    ArticlesModule,
    ArticlesCategoryModule,
    CartModule,
    PaymentsModule,
    PaymentsAdminModule,
    ProductsCommentModule,
    ArticlesCommentModule,
    SettingModule,
    SiteMakerModule,
    AclModule,
    ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtService, ConfigService],
})
export class AppModule {
  // constructor(private readonly connection: Connection) {
  //   console.log("connection status", this.connection.isConnected);
  // }
  // constructor(private readonly connection: Connection) {
  //   console.log('connection status', connection.isConnected);
  // }
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(AuthMiddleware)
  //     .forRoutes(
  //       UsersController,
  //       BrandsController,
  //       ProductCategoriesController,
  //       ProductsController,
  //     );
  // }
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(AuthMiddleware).forRoutes(
  //     UsersController,
  //     BrandsController,
  //     ProductCategoriesController,
  //     ProductsController,
  //   ),
  // }
}
