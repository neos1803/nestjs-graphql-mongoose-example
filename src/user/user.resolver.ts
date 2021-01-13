import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User, UserInput } from './user.entity';
import { UserService } from './user.service';

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
}
