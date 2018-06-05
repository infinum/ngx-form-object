import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'app/models/company.model';
import { DatastoreService } from 'app/services/datastore/datastore.service';

@Injectable()
export class CompanyService {
  constructor(private datastore: DatastoreService) { }

  public save(company: Company): Observable<Company> {
    return this.datastore.save(company);
  }
}
