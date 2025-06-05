import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'displays' })
export class Display {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  reference: string;

  @Column({ unique: true })
  slug: string;

  @Column()
  name: string;

  @Column()
  title: string;

  @Column()
  type: string;

  @Column({ nullable: true })
  created_by: number;

  @Column({ nullable: true })
  updated_by: number;

  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Column({ type: 'boolean' })
  activate: boolean;
}
