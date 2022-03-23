import { Column, Entity, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export class Url {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Index()
  @Column({ unique: true })
  shortUrl: string;
}
