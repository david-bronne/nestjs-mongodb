import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/createUser.dto";
import mongoose from "mongoose";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    createUser(@Body() createUserDto: CreateUserDto) {
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

    @Patch(':id')
    async updateUserById(@Param('id') id:string, @Body() updateUserDto: UpdateUserDto){
        // To be checked in a middelware
        const isValid: boolean = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('User not found', 404);

        const updateUser = await this.usersService.updateUserById(id, updateUserDto);
        if(!updateUser) throw new HttpException('User not found', 404);
        return updateUser;
    }

    @Delete(':id')
    async deleteUserById(@Param('id') id:string){
        // To be checked in a middelware
        const isValid: boolean = mongoose.Types.ObjectId.isValid(id);
        if(!isValid) throw new HttpException('User not found', 404);

        const deleteUser = await this.usersService.deleteUserById(id);
        if(!deleteUser) throw new HttpException('User not found', 404);
        return;
    }
}