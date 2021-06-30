import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import User from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  getUsers(): Promise<User[]> {
    return this.usersRepository.getUsers();
  }

  getUser(id): Promise<User> {
    return this.usersRepository.getUser(id);
  }

  findOneUser(email): Promise<User> {
    return this.usersRepository.findOneUser(email);
  }

  registerUser(user): Promise<User | String> {
    return this.usersRepository.registerUser(user);
  }

  // login(email, password): Promise<User | String> {
  //   return this.userRepository.login(email, password);
  // }
}
