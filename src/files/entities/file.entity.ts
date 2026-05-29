import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Share } from '../../shares/entities/share.entity';

@Entity('files')
export class File {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  filename: string;

  @Column()
  storage_key: string; // S3 key

  @Column()
  mimetype: string;

  @Column('bigint')
  size: number;

  @ManyToOne(() => User, (user) => user.files, { onDelete: 'CASCADE' })
  owner: User;

  @CreateDateColumn()
  created_at: Date;

  // Relations
  @OneToMany(() => Share, (share) => share.file)
  shares: Share[];
}