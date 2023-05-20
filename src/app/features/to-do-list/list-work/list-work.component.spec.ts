import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWorkComponent } from './list-work.component';

describe('ListWorkComponent', () => {
  let component: ListWorkComponent;
  let fixture: ComponentFixture<ListWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
