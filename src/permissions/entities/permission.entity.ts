import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import { File } from '../../files/entities/file.entity';
import { User } from 'src/users/entities/user.entity';

export enum PermissionType {
  VIEW = 'view',
  DOWNLOAD = 'download',
}

@Entity('permissions')
export class Permission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => File, { onDelete: 'CASCADE' })
  file: File;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Column({
    type: 'enum',
    enum: PermissionType,
  })
  permission: PermissionType;
}