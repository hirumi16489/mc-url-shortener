import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlClick } from '../../entities/urlClick.entity';
import { Url } from '../../entities/url.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UrlClickService {
  constructor(
    @InjectRepository(UrlClick)
    private urlClickRepository: Repository<UrlClick>,
    @InjectRepository(Url)
    private urlRepository: Repository<Url>,
  ) {}

  async findAll(urlId: number): Promise<UrlClick[]> {
    return this.urlClickRepository.find({ where: { url: urlId } });
  }

  async create(urlId: number) {
    const url = await this.urlRepository.findOne({ where: { id: urlId }});

    const click = new UrlClick();
    click.url = url;

    return this.urlClickRepository.save(click);
  }
}
