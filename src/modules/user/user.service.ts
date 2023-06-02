import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly userRepo: Repository<User>;

  public getUser(id: string): Promise<User> {
    return this.userRepo.findOne({ where: { id } });
  }

  public createUser(body: CreateUserDto): Promise<User> {
    const newUser: User = this.userRepo.create(body);

    return this.userRepo.save(newUser);
  }
}