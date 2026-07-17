import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email?: string;
}
@Injectable()
export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: '',
    },
    {
      id: 2,
      name: 'Jane Doe',
      email: '',
    },
    {
      id: 3,
      name: 'Bob Smith',
      email: '',
    },
  ];

  findAllUsers(name?: string): User[] {
    if (name) {
      return this.users.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase()),
      );
    }
    return this.users;
  }
}
