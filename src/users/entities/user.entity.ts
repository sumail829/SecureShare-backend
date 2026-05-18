import { Entity,PrimaryColumn,Column,CreateDateColumn,OneToMany } from "typeorm";



@Entity('users')
export class User {

@PrimaryColumn('uuid')
id:string;

@Column({unique:true})
email:string;

@CreateDateColumn()
created_at:Date;

}

