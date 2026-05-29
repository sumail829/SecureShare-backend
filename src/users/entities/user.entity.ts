import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { File } from '../../files/entities/file.entity';

@Entity('users')
export class User {
  @PrimaryColumn('uuid')
  id: string; // Supabase UUID

  @Column({ unique: true })
  email: string;

  @CreateDateColumn()
  created_at: Date;

  // Relations
  @OneToMany(() => File, (file) => file.owner)
  files: File[];
}