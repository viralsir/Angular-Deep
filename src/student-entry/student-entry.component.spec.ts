import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEntryComponent } from './student-entry.component';

describe('StudentEntryComponent', () => {
  let component: StudentEntryComponent;
  let fixture: ComponentFixture<StudentEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
