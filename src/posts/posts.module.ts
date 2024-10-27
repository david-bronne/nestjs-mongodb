import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, PostSchema } from "src/schemas/Post.shema";
import { PostsController } from "./posts.controller";
import { PostsService } from "./posts.service";
import { User, UserSchema } from "src/schemas/User.shema";

    @Module({
            imports: [
                MongooseModule.forFeature([
                    {
                        name: Post.name,
                        schema: PostSchema
                    },
                    {
                        name: User.name,
                        schema: UserSchema
                    }
                ])
            ],
            providers: [PostsService],
            controllers: [PostsController]
        }
    )
    export class PostsModule {};