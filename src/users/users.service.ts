import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "src/schemas/User.shema";
import { CreateUserDto } from "./dto/createUser.dto";

@Injectable()
export class UsersService{
    constructor( @InjectModel(User.name) private userModel: Model<User>){}
    
    createUser(createUserDto:CreateUserDto){
        const newUser = new this.userModel(createUserDto);
        return newUser.save()
    }
}