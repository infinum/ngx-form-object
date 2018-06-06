import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatastoreService } from 'app/services/datastore/datastore.service';
import { Car } from 'app/models/car.model';

@Injectable()
export class CarService {
  constructor(private datastore: DatastoreService) { }

  public save(car: Car): Observable<Car> {
    return this.datastore.save(car);
  }
}
