import { Observable } from 'rxjs';

export interface FormObjectService<T = any> {
  save(model: T): Observable<T>;
}
