import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkService } from '../service/work.service';
import { Work } from '../model/work.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-work',
  templateUrl: './create-work.component.html',
  styleUrls: ['./create-work.component.scss'],
})
export class CreateWorkComponent implements OnInit {
  createForm!: FormGroup;
  defaultDate = new Date().toJSON().slice(0, 10);

  constructor(
    private fb: FormBuilder,
    private toDoListService: WorkService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.createForm = this.fb.group({
      title: [null, Validators.required],
      description: [null],
      dueDate: [this.defaultDate],
      priority: ['Normal'],
    });
  }

  get fc() {
    return this.createForm.controls;
  }

  onChangeDate(event: string): void {
    const currentDate = new Date();
    const selecteDate = new Date(event);

    selecteDate < currentDate
      ? this.fc['dueDate'].setErrors({ invalidDate: true })
      : this.fc['dueDate'].setErrors(null);
  }

  addNewWork(): void {
    this.toDoListService.createWork(this.createForm.value);
    this.router.navigateByUrl('/to-do-list');
  }
}
