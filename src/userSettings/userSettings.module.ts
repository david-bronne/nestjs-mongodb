import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSettings, UserSettingsSchema } from "src/schemas/UserSettings.schema";
import { UserSettingsService } from "./userSettings.service";
import { UserSettingsController } from "./userSettings.controller";
import { User, UserSchema } from "src/schemas/User.shema";

    @Module({
            imports: [
                MongooseModule.forFeature([
                    {
                        name: UserSettings.name,
                        schema: UserSettingsSchema
                    },
                    // Could be imported higher since imported in brother, i.e. post
                    {
                        name: User.name,
                        schema: UserSchema
                    }
                ])
            ],
            providers: [UserSettingsService],
            controllers: [UserSettingsController]
        }
    )
    export class UserSettingsModule {};