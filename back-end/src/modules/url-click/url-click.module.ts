import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlClickService } from './url-click.service';
import { UrlClickResolver } from './url-click.resolver';
import { UrlClick } from '../../entities/urlClick.entity';
import { Url } from '../../entities/url.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UrlClick]), TypeOrmModule.forFeature([Url])],
  providers: [UrlClickService, UrlClickResolver]
})
export class UrlClickModule {}
