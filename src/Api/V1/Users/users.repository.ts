import { EntityRepository, Repository } from 'typeorm';
import User from './users.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  constructor() {
    super();
  }

  async getUsers(): Promise<User[]> {
    return await this.find();
  }

  async getUser(id): Promise<User> {
    return await this.findOne({ id });
  }

  async findOneUser(email): Promise<User> {
    console.log(email);
    const user = await this.findOne({ email });
    console.log(user);
    return user;
    //return await this.findOne({ email });
  }

  async registerUser(user): Promise<User | String> {
    const hashedPassword = await bcrypt.hash(user.password, 12);

    const new_user = {
      name: user.name,
      email: user.email,
      contact: user.contact,
      password: hashedPassword,
    };

    await this.save(new_user);
    return 'User successfully registered';
  }

  // async login(email, password): Promise<User | String> {
  //   let user = await this.findOne({ email });
  //   if (!user) {
  //     return 'email is not registered';
  //   }

  //   if (await bcrypt.compare(password, user.password)) {
  //     const jwt = await this.jwtService.sign({
  //       id: user.id,
  //     });
  //     return jwt;
  //   } else {
  //     return 'Wrong password';
  //   }
  // }
}
