import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserSettingsDto {
    
    @IsNotEmpty()
    @IsString()
    userId: string;
    
    @IsOptional()
    @IsBoolean()
    receiveNotifications?:boolean;
    
    @IsOptional()
    @IsBoolean()
    receiveEmails?:boolean;
    
    @IsOptional()
    @IsBoolean()
    receiveSMS?:boolean;    
}