import { Routes } from '@angular/router';
export const routes : Routes = [
  {
    path: '',
    loadComponent: () => import('@admin/layouts/admin-layout/admin-layout'),
    children: [
      {
        path: '',
        loadComponent: () => import('@admin/pages/summary-page/summary-page')
      },
      {
        path: 'projects',
        loadComponent: () => import('@admin/pages/projects-page/projects-page')
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
