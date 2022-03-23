import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from '../../entities/url.entity';
import { getRepository, Repository } from 'typeorm';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private urlRepository: Repository<Url>,
  ) {}

  async findOne(shortUrl: string): Promise<Url> {
    return this.getQueryBuilder().where('url.shortUrl = :shortUrl', { shortUrl }).getOne();
  }

  async findAll(ids?: number[]): Promise<Url[]> {
    const queryBuilder = this.getQueryBuilder();

    if (ids) {
      queryBuilder.where('url.id IN (:...ids)', { ids });
    }

    return queryBuilder.getMany();
  }

  async create(url: string) {
    let stop = false;
    let count = 0;
    const urlsHistory = new Set(
      (await this.urlRepository.find({ select: ["shortUrl"] }))
      .map(url => url.shortUrl)
    );

    let shortUrl = '';
    while (!stop) {
      shortUrl = this.generateUrl(7);

      if (urlsHistory.has(shortUrl)) {
        continue;
      }

      const urlsFind = await this.urlRepository.find({ where: { shortUrl }});

      // safety guard counter in case generation become faulty
      if (urlsFind.length == 0 || count > 100) {
        stop = true;
      }

      count++;
    }

    if (!!!shortUrl) {
      throw new Error('no short url has been able to be generated...');
    }

    return this.urlRepository.save({
      url,
      shortUrl: `https://localhost:3000/${shortUrl}`
    });
  }

  private getQueryBuilder() {
    return getRepository(Url).createQueryBuilder("url");
  } 

  private generateUrl(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
}
