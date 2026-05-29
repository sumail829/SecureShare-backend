import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { File } from '../../files/entities/file.entity';

export enum ShareType {
  PUBLIC = 'public',
  PRIVATE = 'private',
}

@Entity('shares')
export class Share {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => File, (file) => file.shares, { onDelete: 'CASCADE' })
  file: File;

  @Column({
    type: 'enum',
    enum: ShareType,
  })
  type: ShareType;

  @Column({ nullable: true })
  expiry_date: Date;

  @CreateDateColumn()
  created_at: Date;
}