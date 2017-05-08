import { Routes, RouterModule } from '@angular/router';
import { CompanyPageComponent } from './components/company-page/company-page.component';

const ROUTES: Routes = [
  { path: 'company', component: CompanyPageComponent },
];

export default RouterModule.forRoot(ROUTES, {useHash: false});
