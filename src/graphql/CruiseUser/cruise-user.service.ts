import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { Connection, EntityManager, Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-cruise-user.input';
import { UpdateUserInput } from './dto/update-cruise-user.input';
import { CruiseUser } from './entities/cruise-user.entity';

@Injectable()
export class CruiseUserService {
	constructor(
		@InjectConnection('postgresConnection') private connection: Connection,
		@InjectEntityManager('postgresConnection') private entityManager: EntityManager,
		@InjectRepository(CruiseUser, 'postgresConnection') private userRepository: Repository<CruiseUser>,
	) {}

	//get all Users from the db
	async getUsers(): Promise<CruiseUser[]> {
		return this.userRepository.find({
			order: {
				id: 'DESC'
			}
		});
	}

	// get a user by id
	async getUserById(id: number): Promise<CruiseUser> {
		return this.userRepository.findOneOrFail({
			where: {
				id: id,
			}
		});
	}

	// create a new User
	async createUser(createUserInput: CreateUserInput) {
		const newUser = await this.userRepository.create(createUserInput);
		return this.userRepository.save(newUser);
	}

	//update an existing User
	async updateUser(id: number, updateUserInput: UpdateUserInput): Promise<CruiseUser> {
		const user = await this.getUserById(id);
		const updatedUser = Object.assign(user, updateUserInput);
		return this.userRepository.save(updatedUser);
	}

}
