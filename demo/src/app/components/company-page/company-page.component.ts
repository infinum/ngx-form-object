import { Component, OnInit } from '@angular/core';
import { FormStore, FormObjectBuilder } from 'ngx-form-object';
import { CompanyFormObject } from 'app/forms/company-form-object/company.form-object';
import { Company } from 'app/models/company.model';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {
  public companyForm: FormStore;

  constructor(
    private formObjectBuilder: FormObjectBuilder
  ) { }

  ngOnInit(): void {
    const company: Company = new Company();

    const companyFormObject: CompanyFormObject = new CompanyFormObject(company, null);
    const companyFormStore: FormStore = this.formObjectBuilder.create(companyFormObject);

    this.companyForm = companyFormStore;

    window['x'] = this;
  }

}
