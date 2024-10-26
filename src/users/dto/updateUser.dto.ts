import { IsOptional, IsString } from "class-validator";

export class UpdateUserDto {
    
    @IsString()
    @IsOptional()
    displayName?: string;

    @IsString()
    @IsOptional()
    avatarUrl?: string;

    @IsOptional()
    @IsString()
    settings?: string;
}