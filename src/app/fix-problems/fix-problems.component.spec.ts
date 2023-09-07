import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FixProblemsComponent } from './fix-problems.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FixProblemsComponent', () => {
  let component: FixProblemsComponent;
  let fixture: ComponentFixture<FixProblemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixProblemsComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {},
        },
      ],
      imports: [MatDialogModule, ReactiveFormsModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FixProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
