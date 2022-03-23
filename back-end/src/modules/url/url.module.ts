import { Module } from '@nestjs/common';
import { UrlResolver } from './url.resolver';
import { UrlService } from './url.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Url } from '../../entities/url.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Url])],
  providers: [UrlResolver, UrlService]
})
export class UrlModule {}
