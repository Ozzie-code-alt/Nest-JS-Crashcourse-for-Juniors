import { Controller, Get, Post, Body, Param, Query, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Bob Smith' },
];

@Controller('user')
export class UserController {
  //Get /User

  @Get()
  getUser(@Query('name') name?: string) {
    if (!name) {
      return users;
    }

    return users.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase()),
    );
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
