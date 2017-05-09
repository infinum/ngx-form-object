import { Routes, RouterModule } from '@angular/router';
import { NewUserPageComponent } from './components/new-user-page/new-user-page.component';
import { EditUserPageComponent } from './components/edit-user-page/edit-user-page.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';

const ROUTES: Routes = [
  { path: 'company', component: CompanyPageComponent },
  { path: 'user/new', component: NewUserPageComponent },
  { path: 'user/:id', component: EditUserPageComponent }
];

export const AppRoutes = RouterModule.forRoot(ROUTES, {useHash: false});
