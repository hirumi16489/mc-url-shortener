import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UrlClick {
  @Field(type => Int)
  id: number;

  @Field()
  date: Date;
}
