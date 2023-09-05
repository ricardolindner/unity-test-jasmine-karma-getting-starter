import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FixProblemsService } from './fix-problems.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FixProblemsService', () => {
  let service: FixProblemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FixProblemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
