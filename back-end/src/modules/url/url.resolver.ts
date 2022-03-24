import { Args, Mutation, Query, Resolver, ResolveField, Parent, Int } from '@nestjs/graphql';
import { Url } from './url.dtos';
import { UrlService } from './url.service';
import { UrlClickService } from '../url-click/url-click.service';

@Resolver(of => Url)
export class UrlResolver {
  constructor(private urlService: UrlService, private urlClickService: UrlClickService) {}

  @Query(returns => Url)
  url(@Args('shortUrl', { type: () => String }) shortUrl: string) {
    return this.urlService.findOne(shortUrl);
  }

  @Query(returns => [Url])
  urls(@Args('ids', { type: () => [Int], nullable: 'itemsAndList' }) ids: number[]) {
    return this.urlService.findAll(ids);
  }

  @Mutation(returns => Url)
  generateUrl(@Args('url', { type: () => String }) url: string) {
    return this.urlService.create(url);
  }

  @ResolveField()
  clicks(@Parent() url: Url) {
    const { id } = url;
    return this.urlClickService.findAll(id);
  }
}
