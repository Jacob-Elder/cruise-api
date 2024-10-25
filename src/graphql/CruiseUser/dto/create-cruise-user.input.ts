import { InputType, Int, Field } from '@nestjs/graphql';
import { GraphQLTimestamp } from 'graphql-scalars';

@InputType()
export class CreateUserInput {

	@Field({ description: 'The users email address.' })
	email: string;

	@Field({ description: 'Username chosen by the user.' })
	username: string;

	@Field({ description: 'Password selected by the user.' })
	password: string;

	@Field({ description: 'Date the user was created.' })
	create_date: Date;

}
