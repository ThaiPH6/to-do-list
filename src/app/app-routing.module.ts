import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'to-do-list',
    loadChildren: () => import('./features/to-do-list/to-do-list.module').then(m => m.ToDoListModule)
  },
  {
    path: '',
    redirectTo: 'to-do-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
