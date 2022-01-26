import { User } from '../model/user';
import { v4 as uuidv4 } from 'uuid';

export class UserService {
  public get(id: string, name?: string): User {
    return {
      id,
      email: 'jane@doe.com',
      name: name ?? 'Jane Doe',
      status: 'Happy',
      phoneNumbers: [],
    };
  }

  public create(user: User): User {
    return {
      id: uuidv4(),
      status: 'Happy',
      ...user,
    };
  }
}
