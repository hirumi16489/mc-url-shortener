import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, Index } from 'typeorm';
import { Url } from './url.entity';

@Entity()
export class UrlClick {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  date: string;

  @Index()
  @ManyToOne(() => Url, url => url.clicks)
  url: Url;
}
