import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Work } from '../../model/work.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WorkService } from '../../service/work.service';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements OnInit {
  @Input() item!: Work;
  @Output() currentWork = new EventEmitter<number>();

  updateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toDoListService: WorkService
  ) {}

  ngOnInit(): void {
    console.log("alooo", this.item);
    this.initForm();
    
  }

  initForm(): void {
    if (this.item) {
      this.updateForm = this.fb.group({
        title: [this.item.title, Validators.required],
        description: [this.item.description],
        dueDate: [this.item.dueDate],
        priority: [this.item.priority]
      })
    }
  }

  get fc() {
    return this.updateForm.controls;
  }

  onChangeDate(event: string): void {
    const currentDate = new Date();
    const selecteDate = new Date(event);

    selecteDate < currentDate
      ? this.fc['dueDate'].setErrors({ invalidDate: true })
      : this.fc['dueDate'].setErrors(null);
  }

  updateWork(): void {
    if (this.updateForm.valid) {
      const updatedValue: Work = {
        id: this.item.id,
        title: this.fc['title'].value,
        description: this.fc['description'].value,
        dueDate: this.fc['dueDate'].value,
        priority: this.fc['priority'].value,
        isDone: this.item.isDone
      }
      this.toDoListService.updateWork(updatedValue);
      this.currentWork.emit(-1);
    }
  }
}
