import { Injectable } from '@angular/core';
import { Work } from '../model/work.model';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  listWorks: Work[] = [];

  constructor() { }

  getListWorks(): Work[] {
    return this.listWorks;
  }

  createWork(work: any): void {
    const newData: Work = {
      id: this.listWorks.length + 1,
      title: work.title,
      description: work.description,
      dueDate: work.dueDate,
      priority: work.priority,
      isDone: false,
      isChecking: false
    }
    this.listWorks.push(newData);
  }

  updateWork(workUpdate: Work): void {
    const workIndex = this.listWorks.findIndex( work => work.id === workUpdate.id);
    this.listWorks[workIndex] = {...workUpdate};
  }

  deleteSingleWork(id: number): void {
    const workIndex = this.listWorks.findIndex( work => work.id === id);
    this.listWorks.splice(workIndex, 1);
  }

  deleteWorks(ids: number[]): void {
    this.listWorks.forEach( () => {
      ids.forEach( id => {
        this.listWorks.splice(this.listWorks.findIndex( work => work.id === id), 1)
      })
    })
  }

  finishWorks(ids: number[]): void {
    this.listWorks.forEach( (work: Work) => {
      work.isDone = ids.includes(work.id);
      work.isChecking = !ids.includes(work.id);
    })
  }
}
