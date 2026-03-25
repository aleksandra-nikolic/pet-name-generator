import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'options',
    loadComponent: () => import('./components/options/options').then((m) => m.Options),
  },
  {
    path: 'results',
    loadComponent: () => import('./components/results/results').then((m) => m.Results),
  },
];
