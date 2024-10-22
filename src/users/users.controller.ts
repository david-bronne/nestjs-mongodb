import { Body, Controller, Get, HttpException, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/createUser.dto";
import mongoose from "mongoose";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    // @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto);
        return this.usersService.createUser(createUserDto);
    }

    @Get()
    getUsers(){
        return this.usersService.getUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id:string){
        // To be checked in a middelware
        const isValid: boolean = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('User not found', 404);

        const findUser = await this.usersService.getUserById(id);
        if(!findUser) throw new HttpException('User not found', 404);
        return findUser
    }
}