import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Post } from "src/schemas/Post.shema";
import { CreatePostDto } from "./dto/createPost.dto";
import { User } from "src/schemas/User.shema";


@Injectable()
export class PostsService{
    constructor( 
        @InjectModel(Post.name) private postModel: Model<Post>,
        @InjectModel(User.name) private userModel: Model<User>       
    ){}
    
    async createPost({userId ,...createPostDto}:CreatePostDto){
        const findUser = await this.userModel.findById(userId);
        if (!findUser) throw new HttpException('User not found', 404);

        const newPost = new this.postModel(createPostDto);
        const savedPost = await newPost.save();

        const updatedUser = await findUser.updateOne({
            $push: {
                posts: savedPost._id
            }
        })
        console.log('updatedUser', updatedUser)
        return updatedUser;
    }

}