import { Body, Controller, Post } from "@nestjs/common";
import { UserSettingsService } from "./userSettings.service";
import { CreateUserSettingsDto } from "./dto/createUserSettings.dto";

@Controller('userSettings')
export class UserSettingsController {
    constructor(private userSettingsService: UserSettingsService) {}

    @Post()
    createUserSettings(@Body() createUserSettingsDto: CreateUserSettingsDto) {
        console.log(createUserSettingsDto);
        return this.userSettingsService.createUserSettings(createUserSettingsDto);
    }
}