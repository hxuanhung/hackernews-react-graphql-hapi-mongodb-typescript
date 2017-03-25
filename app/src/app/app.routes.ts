import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { GifAddComponent } from './gif/add';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'add', component: GifAddComponent },
  { path: 'about', component: AboutComponent },
  { path: '**',    component: NoContentComponent },
];
