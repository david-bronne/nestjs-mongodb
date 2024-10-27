import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserSettings } from "src/schemas/UserSettings.schema";
import { CreateUserSettingsDto } from "./dto/createUserSettings.dto";

@Injectable()
export class UserSettingsService{
    constructor( @InjectModel(UserSettings.name) private userSettingsModel: Model<UserSettings>){}
    
    createUserSettings(createUserSettingsDto:CreateUserSettingsDto){
        const newUserSettings = new this.userSettingsModel(createUserSettingsDto);
        return newUserSettings.save()
    }

}