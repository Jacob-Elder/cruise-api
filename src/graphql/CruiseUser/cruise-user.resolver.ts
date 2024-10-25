import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CruiseUserService } from './cruise-user.service';
import { CruiseUser } from './entities/cruise-user.entity';
import { CreateUserInput } from './dto/create-cruise-user.input';
import { UpdateUserInput } from './dto/update-cruise-user.input';

@Resolver(() => CruiseUser)
export class CruiseUserResolver {
	constructor(private readonly userService: CruiseUserService) {}

	// get all users
	@Query(() => [CruiseUser])
	getUsers() {
		return this.userService.getUsers();
	}

	//get a user by id
	@Query(() => CruiseUser)
	getUserById(@Args('id', { type: () => Int }) id: number) {
		return this.userService.getUserById(id);
	}

	// create a new user
	@Mutation(() => CruiseUser)
	createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
		return this.userService.createUser(createUserInput);
	}

	// update an existing user
	@Mutation(() => CruiseUser)
	updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
		return this.userService.updateUser(
			updateUserInput.id,
			updateUserInput,
		);
	}

}
