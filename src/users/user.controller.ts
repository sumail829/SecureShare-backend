import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user-dto";
import { UsersService } from "./user.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";


@Controller('users')
export class UsersController{
     constructor(private readonly usersService: UsersService) {}



    @Post()
    @UseGuards(JwtAuthGuard)
    create(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
    }
}

