import { Field, Int, ObjectType } from '@nestjs/graphql';
import { UrlClick } from '../url-click/url-click.dtos';

@ObjectType()
export class Url{
  @Field(type => Int)
  id: number;

  @Field()
  url: string;

  @Field()
  shortUrl: string;

  @Field(type => [UrlClick])
  clicks: UrlClick[];
}
