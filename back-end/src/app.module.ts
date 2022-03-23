import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UrlModule } from './modules/url/url.module';
import { join } from 'path';

const graphQLConfig = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  debug: false,
  playground: true,
  autoSchemaFile: true,
});

const typeORMConfig = TypeOrmModule.forRoot();

const modules = [UrlModule];

@Module({
  imports: [graphQLConfig, typeORMConfig, ...modules],
})
export class AppModule {
  constructor(private _connection: Connection) {}
}
