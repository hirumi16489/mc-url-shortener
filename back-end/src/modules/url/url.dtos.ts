import { Field, Int, ObjectType, InputType } from '@nestjs/graphql';

@ObjectType()
export class UrlOutputDto {
  @Field(type => Int)
  id: number;

  @Field()
  url: string;

  @Field()
  shortUrl: string;
}

@InputType()
export class UrlInputDto {
  @Field()
  url: string;

  @Field()
  alias: string;
}

