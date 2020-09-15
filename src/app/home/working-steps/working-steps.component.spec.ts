import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingStepsComponent } from './working-steps.component';

describe('WorkingStepsComponent', () => {
  let component: WorkingStepsComponent;
  let fixture: ComponentFixture<WorkingStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
