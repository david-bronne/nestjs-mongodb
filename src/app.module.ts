import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

// if authentication : MongooseModule.forRoot('mongodb://name:password@127.0.0.1/nestjs_api'
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1/nestjs_api'),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
