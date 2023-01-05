import { Module } from "@nestjs/common";
import { UserModule } from "./core/user/user.module";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./api/auth/auth.module";
import "dotenv/config";
import { AppController } from "./app.controller";
import { PostModule } from "./core/post/post.module";

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
        AuthModule,
        PostModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
