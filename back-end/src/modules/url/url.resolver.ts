import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UrlOutputDto } from './url.dtos';
import { UrlService } from './url.service';

@Resolver()
export class UrlResolver {
  constructor(private urlService: UrlService) {}

  @Query(returns => UrlOutputDto)
  url(@Args('shortUrl', { type: () => String }) shortUrl: string) {
    return this.urlService.findOne(shortUrl);
  }

  @Mutation(returns => UrlOutputDto)
  generateUrl(@Args('url', { type: () => String }) url: string) {
    return this.urlService.create(url);
  }
}
