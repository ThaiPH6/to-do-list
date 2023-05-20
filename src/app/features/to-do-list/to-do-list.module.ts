import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { ListWorkComponent } from './list-work/list-work.component';
import { CreateWorkComponent } from './create-work/create-work.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WorkDetailsComponent } from './list-work/work-details/work-details.component';


@NgModule({
  declarations: [
    ListWorkComponent,
    CreateWorkComponent,
    WorkDetailsComponent
  ],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ToDoListModule { }
