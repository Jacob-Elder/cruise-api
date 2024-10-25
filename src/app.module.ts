import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { postgresConfig } from '../ormconfig';
//import postgres modules
import { CruiseUserModule } from './graphql/CruiseUser/cruise-user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/graphql/schema.gql'
    }),
    TypeOrmModule.forRoot(postgresConfig),
    CruiseUserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
