import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn } from 'typeorm';
import { GraphQLTimestamp } from 'graphql-scalars';

@Entity('cruise_user')
@ObjectType()
export class CruiseUser {

	@PrimaryGeneratedColumn()
	@Field((type) => Int, { description: 'System Generated ID' })
	id: number;

	@Column({ type: 'varchar', length: 191})
	@Field({ description: 'The users email address' })
	email: string;

	@Column({ type: 'varchar', length: 191 })
	@Field({ description: 'Username chosen by user' })
	username: string;

	@Column({ type: 'varchar', length: 191 })
	@Field({ description: 'Password selected by the user.' })
	password: string;

	@Column({ type: 'timestamp' })
	@Field((type) => GraphQLTimestamp, { description: 'Date the user was created.' })
	create_date: Date;
}
