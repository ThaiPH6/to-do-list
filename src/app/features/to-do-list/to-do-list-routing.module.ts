import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListWorkComponent } from './list-work/list-work.component';
import { CreateWorkComponent } from './create-work/create-work.component';

const routes: Routes = [
  {
    path: '',
    component: ListWorkComponent
  },
  {
    path: 'add',
    component: CreateWorkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoListRoutingModule { }
