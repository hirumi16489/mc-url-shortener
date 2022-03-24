import { Module } from '@nestjs/common';
import { UrlResolver } from './url.resolver';
import { UrlService } from './url.service';
import { UrlClickService } from '../url-click/url-click.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from '../../entities/url.entity';
import { UrlClick } from '../../entities/urlClick.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Url]), TypeOrmModule.forFeature([UrlClick])],
  providers: [UrlResolver, UrlService, UrlClickService]
})
export class UrlModule {}
