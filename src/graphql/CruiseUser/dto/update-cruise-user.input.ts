import { InputType, Field, Int, PartialType, GraphQLTimestamp } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
	
	@Field(() => Int)
	id: number;

	@Field({ description: 'The users email address.' })
	email: string;

	@Field({ description: 'Username chosen by the user.' })
	username: string;

	@Field({ description: 'Password selected by the user.' })
	password: string;

	@Field({ description: 'Date the user was created.' })
	create_date: Date;

}
