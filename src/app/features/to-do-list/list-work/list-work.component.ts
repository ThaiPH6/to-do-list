import { Component, OnInit } from '@angular/core';
import { Work } from '../model/work.model';
import { Router } from '@angular/router';
import { WorkService } from '../service/work.service';

@Component({
  selector: 'app-list-work',
  templateUrl: './list-work.component.html',
  styleUrls: ['./list-work.component.scss'],
})
export class ListWorkComponent implements OnInit {
  listWorks: Work[] = [];
  listWorkChecking: number[] = [];
  currentWork: number = -1;
  filterWork: string = '';
  constructor(private router: Router, private toDoListService: WorkService) {}

  ngOnInit(): void {
    this.getListWorks();
  }

  getListWorks(): void {
    this.listWorks = this.toDoListService.getListWorks();
    console.log('alooo', this.listWorks);
    
  }

  createNewWork() {
    this.router.navigateByUrl('/to-do-list/add');
  }

  onCheckWork(isChecking: boolean, id: number): void {
    if (isChecking === true) {
      this.listWorkChecking.push(id);
    } else {
      const index = this.listWorkChecking.indexOf(id);
      this.listWorkChecking.splice(index, 1);
    }
  }

  finisheMultipleWorks(): void {
    if (this.listWorkChecking.length > 0) {
      this.toDoListService.finishWorks(this.listWorkChecking);
      this.getListWorks();
      this.listWorkChecking = []; 
    }
  }

  deleteSingleWork(id: number): void {
    this.toDoListService.deleteSingleWork(id);
    this.getListWorks();
  }

  deleteMultipleWorks(): void {
    if (this.listWorkChecking.length > 0) {
      this.toDoListService.deleteWorks(this.listWorkChecking);
      this.listWorkChecking = []; 
      this.getListWorks();
    }
  }

  showDetails(index: number): void {
    this.currentWork = this.currentWork !== index ? index : -1;
  }

  updateWorkSuccess(event: number): void {
    this.currentWork = event;
    this.getListWorks();
  }

  applyWorkFilter(filterValue: string): void {
    const defaultListWorks = this.toDoListService.getListWorks();
    if (filterValue == '') {
      this.listWorks = defaultListWorks;
    } else {
      this.listWorks = defaultListWorks.filter((work) =>
        work.title.includes(filterValue)
      );
    }
  }

  trackByFn(index: number, item: Work) {
    return item.id;
  }
}
