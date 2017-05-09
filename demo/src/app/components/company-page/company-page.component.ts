import { Component, OnInit, Injector } from '@angular/core';
import { FormStore, FormObjectBuilder } from 'ngx-form-object';
import { CompanyFormObject } from 'app/forms/company-form-object/company.form-object';
import { Company } from 'app/models/company.model';

@Component({
  selector: 'company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.css']
})
export class CompanyPageComponent implements OnInit {
  public companyForm: FormStore;

  constructor(
    private formObjectBuilder: FormObjectBuilder,
    private injector: Injector
  ) { }

  ngOnInit(): void {
    const company: Company = new Company();
    this.companyForm = this.createCompanyForm(company);
  }

  public onCompanyFormSave(): void {
    this.companyForm.save();
  }

  private createCompanyForm(company: Company): FormStore {
    const companyFormObject: CompanyFormObject = new CompanyFormObject(company, null, this.injector);
    const companyFormStore: FormStore = this.formObjectBuilder.create(companyFormObject);

    return companyFormStore;
  }
}
