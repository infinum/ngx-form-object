import { Component, OnInit } from '@angular/core';
import { DatastoreService } from 'app/services/datastore/datastore.service';
import { Car } from 'app/models/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private datastore: DatastoreService) { }

  ngOnInit() {
    const car: Car = new Car();
    this.datastore.save(car);

    console.log(this.datastore.get(Car, '10627'));
  }
}
