import 'dotenv/config';
import { CruiseUser } from 'src/graphql/CruiseUser/entities/cruise-user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const postgresConfig: PostgresConnectionOptions = {
	type: 'postgres',
	name: 'postgresConnection',
	//host: process.env.POSTGRES_URL,
    host: process.env.POSTGRES_URL, //dev server public ip
	port: 5432,
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PSWD,
	database: process.env.POSTGRES_DB,
	entities: [CruiseUser],
	synchronize: true,
	logging: ['query', 'error'],
	// logging: false,
};