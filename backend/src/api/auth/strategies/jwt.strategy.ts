import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserService } from "../../../core/user/user.service";
import { jwtSecret } from "../constants";
import { IUser } from "../../../core/user/schema/user.schema";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UserService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtSecret,
        });
    }

    async validate(validationPayload: { email: string; sub: string }): Promise<IUser | null> {
        return this.userService.getUserByAttrService({
            email: validationPayload.email,
        });
    }
}
