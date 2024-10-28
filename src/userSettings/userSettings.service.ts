import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserSettings } from "src/schemas/UserSettings.schema";
import { CreateUserSettingsDto } from "./dto/createUserSettings.dto";
import { User } from "src/schemas/User.shema";

@Injectable()
export class UserSettingsService{
    constructor( 
        @InjectModel(UserSettings.name) private userSettingsModel: Model<UserSettings>,
        @InjectModel(User.name) private userModel: Model<User>){}
    
    async createUserSettings({userId ,...createUserSettingsDto}:CreateUserSettingsDto){
        const findUser = await this.userModel.findById(userId);
        if (!findUser) throw new HttpException('User not found', 404);
        
        const newUserSettings = new this.userSettingsModel(createUserSettingsDto);
        newUserSettings.save();
        
        const updatedUser = await findUser.updateOne({
            $set: {
                settings: newUserSettings._id
            }
        })
        console.log('updatedUser', updatedUser)
        return updatedUser;
    }

}