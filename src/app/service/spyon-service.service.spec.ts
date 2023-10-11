import { TestBed } from '@angular/core/testing';

import { SpyonServiceService } from './spyon-service.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EmptyExpr } from '@angular/compiler';

describe('SpyonServiceService', () => {
  let service: SpyonServiceService;
  const logger = jasmine.createSpy('log');
  const status = jasmine.createSpyObj('service', ['name', 'age', 'email']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SpyonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Deve retornar uma lista de usuários', () => {
    const response = [
      { name: 'Danilo', age: 30, email: 'danilodev.silva@gmail.com' },
      { name: 'Jose', age: 40, email: 'jose.silva@gmail.com' },
      { name: 'Maria', age: 30, email: 'maria.silva@gmail.com' },
    ];

    spyOn(service, 'getUsers').and.returnValue(of(response));

    service.getUsers().subscribe((res) => {
      expect(res).toEqual(response);
    });
  });

  it('Deve criar método com jasmine.createSpy', () => {
    logger('Loguei no sistema');
    expect(logger).toHaveBeenCalledTimes(1);
    expect(logger).toHaveBeenCalledWith('Loguei no sistema');
  });

  it('Deve criar métodos com jasmine.createSpyObj', () => {
    status.name('Danilo');
    status.email('danilove.silva@gmail.com');
    status.age(30);

    expect(status.name).toHaveBeenCalledTimes(1);
    expect(status.name).toHaveBeenCalledWith('Danilo');

    expect(status.email).toHaveBeenCalledTimes(1);
    expect(status.email).toHaveBeenCalledWith('danilove.silva@gmail.com');

    expect(status.age).toHaveBeenCalledTimes(1);
    expect(status.age).toHaveBeenCalledWith(30);
  });
});
