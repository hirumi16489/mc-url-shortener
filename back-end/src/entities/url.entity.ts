import { Column, Entity, PrimaryGeneratedColumn, Index, OneToMany } from 'typeorm';
import { UrlClick } from './urlClick.entity';

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Index()
  @Column({ unique: true })
  shortUrl: string;

  @OneToMany(() => UrlClick, urlClick => urlClick.url)
  clicks: UrlClick[];
}
