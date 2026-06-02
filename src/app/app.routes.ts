import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { HousingDetail } from './components/housing-detail/housing-detail';
import { HousingForm } from './components/housing-form/housing-form';
import {LoginForm} from './components/login-form/login-form';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'housing/:id', component: HousingDetail },
  { path: 'add-house', component: HousingForm },
  { path: 'apply', component: LoginForm }
];
