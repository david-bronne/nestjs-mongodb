import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";

import mongoose from "mongoose";
import { CreatePostDto } from "./dto/createPost.dto";
import { PostsService } from "./posts.service";

@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService) {}

    @Post()
    @UsePipes(new ValidationPipe())
    createPost(@Body() createPostDto: CreatePostDto) {
        // should get authenticated userId from session data 
        return this.postsService.createPost(createPostDto);
    }

}