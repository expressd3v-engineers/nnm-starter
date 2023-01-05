import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { IUser, User } from "./schema/user.schema";
import { Model } from "mongoose";
import { cryptString } from "src/helper/bcrypt/bcrypt.helper";

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<IUser>) {}

    async getUsersService(query): Promise<IUser[]> {
        console.log(query);
        return this.userModel.find().lean();
    }

    async getUserService(id: string): Promise<IUser> {
        return this.userModel.findOne({ _id: id }).lean();
    }

    async getUserByAttrService(attr: any): Promise<IUser> {
        return this.userModel
            .findOne(
                {
                    ...attr,
                },
                ["_id", "name", "email", "phone", "password", "location", "createdAt", "updatedAt"],
            )
            .lean();
    }

    async addUserService(user: any): Promise<IUser> {
        const newUser = new this.userModel({
            ...user,
            password: cryptString(user.password),
        });
        return newUser.save();
    }

    async updateUserService(user: any): Promise<IUser> {
        return this.userModel.findOneAndUpdate({ _id: user.id }, { ...user }, { new: true }).lean();
    }

    async deleteUserService(id: string): Promise<any> {
        return this.userModel.findOneAndDelete({ _id: id });
    }
}
