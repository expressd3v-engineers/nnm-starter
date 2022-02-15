import { Module } from '@nestjs/common';
import { UserModule } from './core/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import 'dotenv/config';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_ENDPOINT, {
      //todo: Add Certification file
      // ssl: true,
      // sslCA: `${__dirname}/ca.pem`,
      connectionFactory: (connection) => {
        return connection;
      },
    }),
    UserModule,
  ],
})
export class AppModule {}
