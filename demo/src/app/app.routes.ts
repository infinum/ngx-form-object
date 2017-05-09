import { Routes, RouterModule } from '@angular/router';
import { NewUserPageComponent } from './components/new-user-page/new-user-page.component';
import { EditUserPageComponent } from './components/edit-user-page/edit-user-page.component';
import { CompanyPageComponent } from './components/company-page/company-page.component';
import { UsersPageComponent } from './components/users-page/users-page.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'company', component: CompanyPageComponent },
  { path: 'users/new', component: NewUserPageComponent },
  { path: 'users/:id', component: EditUserPageComponent },
  { path: 'users', component:  UsersPageComponent }
];

export const AppRoutes = RouterModule.forRoot(ROUTES, {useHash: false});
