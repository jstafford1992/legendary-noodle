import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClutchesListComponent } from './clutches-list.component';

describe('ClutchesListComponent', () => {
  let component: ClutchesListComponent;
  let fixture: ComponentFixture<ClutchesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClutchesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClutchesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
