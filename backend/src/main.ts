import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import "dotenv/config";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: true,
    });
    app.useGlobalPipes(new ValidationPipe());
    await app.listen(process.env.PORT || 8000);
}
bootstrap().then(() => {
    console.log(
        `...............................  SERVER STARTED AT ${process.env.PORT || 8000}!  ............................`,
    );
});
