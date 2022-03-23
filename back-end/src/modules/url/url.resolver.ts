import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UrlOutputDto } from './url.dtos';
import { UrlService } from './url.service';

@Resolver()
export class UrlResolver {
  constructor(private urlService: UrlService) {}
}
