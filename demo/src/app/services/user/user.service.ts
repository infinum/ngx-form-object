import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { DatastoreService } from 'app/services/datastore/datastore.service';
import { User } from 'app/models/user.model';

@Injectable()
export class UserService {
  constructor(private datastore: DatastoreService) { }

  public save(user: User): Observable<User> {
    return this.datastore.save(user);
  }
}
