import { Args, Mutation, Resolver, Int } from '@nestjs/graphql';
import { UrlClick } from '../url-click/url-click.dtos';
import { UrlClickService } from '../url-click/url-click.service';

@Resolver()
export class UrlClickResolver {
  constructor(private urlClickService: UrlClickService) {}

  @Mutation(returns => UrlClick)
  newClick(@Args('urlId', { type: () => Int }) urlId: number) {
    return this.urlClickService.create(urlId);
  }
}
