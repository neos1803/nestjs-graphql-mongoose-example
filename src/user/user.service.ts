import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument, UserInput } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userSchema: Model<UserDocument>
    ) {}

    public async findAll() {
        return await this.userSchema.find()
    }

    public async create(input: UserInput): Promise<User> {
        return await this.userSchema.create({
            username: input.username,
            password: input.password
        })
    }

}
