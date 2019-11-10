import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() { }

  public save(user: User): Observable<User> {
    return of(user);
  }
}
