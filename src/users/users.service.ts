import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { User } from "src/schemas/User.shema";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";

@Injectable()
export class UsersService{
    constructor( @InjectModel(User.name) private userModel: Model<User>){}
    
    createUser(createUserDto:CreateUserDto){
        const newUser = new this.userModel(createUserDto);
        return newUser.save()
    }

    getUsers(){
        return this.userModel.find();
    }

    getUserById(id:string){
        return this.userModel.findById(id).populate('settings');
    }

    updateUserById(id: string, {settings, ...updateUserDto}: UpdateUserDto) {
        if (settings) {
            const settingsId = new Types.ObjectId(settings);
            return this.userModel.findByIdAndUpdate(id, {...updateUserDto, settings: settingsId}, {new: true});
        }
        return this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true});
    }

    deleteUserById(id:string){
        return this.userModel.findByIdAndDelete(id);
    }
}