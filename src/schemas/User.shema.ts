import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { UserSettings } from "./UserSettings.schema";
import { Post } from "./Post.shema";

@Schema()
export class User {
    @Prop({unique: true, required: true})
    userName: string;

    @Prop({required: false})
    displayName?: string;

    @Prop({required: false})
    avatarUrl?: string;

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'UserSettings'})
    settings?: UserSettings

    // Could go in an Author Schema
    @Prop({ type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]})
    posts: Array<Post>
}

export const UserSchema = SchemaFactory.createForClass(User);