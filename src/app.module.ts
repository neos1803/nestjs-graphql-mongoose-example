import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Upload } from './user/scalars/upload.scalar';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      typePaths: ['./src/user/user.graphql'],
      playground: true,
      uploads: {
        maxFileSize: 20000000,
        maxFiles: 5
      }
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/grapqhl-example')
  ],
  controllers: [AppController],
  providers: [AppService, Upload],
})
export class AppModule {}
