import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "../../core/user/user.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtSecret } from "./constants";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { LocalStrategy } from "./strategies/local.strategy";

@Module({
    imports: [
        UserModule,
        PassportModule.register({ defaultStrategy: "jwt" }),
        JwtModule.register({
            secret: jwtSecret,
            signOptions: { expiresIn: "7 days" },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy, LocalStrategy],
})
export class AuthModule {}
