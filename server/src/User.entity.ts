import { v4 as uuidV4} from 'uuid'
export default class User {
  id: string;
  email: string;
  username: string;

  constructor({ username, email }: Omit<User, 'id'>) {
    this.id = uuidV4()
    this.email = email;
    this.username = username;
  }
}