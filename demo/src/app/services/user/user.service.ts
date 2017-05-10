import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { DatastoreService } from 'app/services/datastore/datastore.service';
import { User } from 'app/models/user.model';

@Injectable()
export class UserService {
  constructor(private datastore: DatastoreService) { }

  get users(): Array<User> {
    const users: Array<any> = this.datastore.findAll(User);
    return users as Array<User>;
  }

  public getUser(userId: string): User {
    const user: User = this.datastore.find(User, userId) as User;
    return user;
  }

  public save(user: User): Observable<User> {
    return this.datastore.save(user);
  }
}
