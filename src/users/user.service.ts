import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user-dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

 async createUser(dto: CreateUserDto) {
  const user = this.userRepo.create(dto);
  return this.userRepo.save(user);
}

  async findById(id: string) {
    return this.userRepo.findOne({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.userRepo.findOne({ where: { email } });
  }
}