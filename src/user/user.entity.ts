import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema({
    collection: 'user',
    timestamps: true
})
export class User {
    @Prop({
        type: String
    })
    username: string

    @Prop({
        type: String
    })
    password: string
}

export class UserInput {
    username: string
    password: string
}

export const UserSchema = SchemaFactory.createForClass(User)