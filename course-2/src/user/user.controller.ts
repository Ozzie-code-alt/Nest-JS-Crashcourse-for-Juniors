import { Controller, Get, Post, Body, Param, Query, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

// const users = [
//   { id: 1, name: 'John Doe' },
//   { id: 2, name: 'Jane Doe' },
//   { id: 3, name: 'Bob Smith' },
// ];

//Updated comment here
@Controller('user')
export class UserController {
  //constructor
  constructor(private readonly userService: UserService) {}
  //Get /User

  @Get()
  getUser(@Query('name') name?: string) {
    // const userService = new UserService();
    return this.userService.findAllUsers(name);
  }
  //Get /User/:id
  @Get(':id')
  getUserById(@Query('id') id: number) {
    return { id, name: `User ${id}` };
  }
  //Post event we fix types here by DTO - Data Transfer Object
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return { message: 'User created successfully', user: createUserDto };
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return { id, ...updateUserDto };
  }
}
