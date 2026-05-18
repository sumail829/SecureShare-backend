import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user-dto";
import { UsersService } from "./user.service";


@Controller('users')
export class UsersController{
     constructor(private readonly usersService: UsersService) {}



    @Post()
    create(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
    }
}

