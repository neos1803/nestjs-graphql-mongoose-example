import { Args, Mutation, Query, Resolver, Scalar } from '@nestjs/graphql';
import { User, UserInput } from './user.entity';
import { UserService } from './user.service';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Query(() => String)
    async hello() {
        return 'Hello World'
    }

    @Query(() => [User])
    async users() {
        return this.userService.findAll()
    }

    @Mutation(() => User)
    async createUser(@Args('input') input: UserInput) {
        return await this.userService.create(input)
    }

    @Mutation(() => Boolean)
    async uploadFile(@Args({ name: 'file', type: () => GraphQLUpload }){
        createReadStream,
        filename
    }: FileUpload): Promise<boolean> {
        return new Promise(async (resolve, reject) => {
            createReadStream()
                .pipe(createWriteStream(`${__dirname}/uploads/${filename}`))
                .on('finish', () => resolve(true))
                .on('error', (error) => reject(error))
        })
    }
}
