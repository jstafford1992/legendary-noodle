import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakesListComponent } from './snakes-list.component';

describe('SnakesListComponent', () => {
  let component: SnakesListComponent;
  let fixture: ComponentFixture<SnakesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
