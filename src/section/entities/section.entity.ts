import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Section {
  @PrimaryGeneratedColumn()
  int: number;

  @Column()
  display_id: number;

  @Column()
  cover: string;

  @Column()
  poster: string;

  @Column()
  duration: number;

  @Column()
  uri: string;
}
