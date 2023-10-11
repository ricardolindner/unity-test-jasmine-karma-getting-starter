import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersJasmineComponent } from './matchers-jasmine.component';

describe('MatchersJasmineComponent', () => {
  let component: MatchersJasmineComponent;
  let fixture: ComponentFixture<MatchersJasmineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatchersJasmineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatchersJasmineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve testar o uso do matcher toEqual', () => {
    expect(true).toEqual(true);
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });

  it('Deve testar o uso do matcher toBe', () => {
    let nomes = ['Danilo', 'Carlos', 'Jose'];
    let names = nomes;

    expect(nomes).toBe(names);

    let age = 10;

    expect(age).toBe(10);
  });

  it('Deve testar o uso do matcher toBeTruthy', () => {
    expect(true).toBeTruthy();
    expect(10).toBeTruthy();
    expect({}).toBeTruthy();
  });

  it('Deve testar o uso do matcher tobeFalsy', () => {
    expect('').toBeFalsy();
    expect(null).toBeFalsy();
    expect(NaN).toBeFalsy();
  });

  it('Deve testar o uso do matcher toBeTrue', () => {
    let boolValue = !!10;
    expect(true).toBeTrue();
    expect(boolValue).toBeTrue();
  });

  it('Deve testar o uso do matcher toBeFalse', () => {
    let boolValue = !!'';
    expect(false).toBeFalse();
    expect(boolValue).toBeFalse();
  });

  it('Deve testar o uso do matcher not', () => {
    expect('Jorge').not.toEqual('Kleber');
  });

  it('Deve testar o uso do matcher toContain', () => {
    expect('Marvelous').toContain('Marvel');
    expect([1, 2, 3]).toContain(1);
  });

  it('Deve testar o uso do matcher toBeDefined', () => {
    let name;
    name = 'Danilo';
    expect(name).toBeDefined();
  });

  it('Deve testar o uso do matcher toBeUndefined', () => {
    let name;
    expect(name).toBeUndefined();
  });

  it('Deve testar o uso do matcher toBeNull', () => {
    expect(null).toBeNull();
  });

  it('Deve testar o uso do matcher toBeNaN', () => {
    expect(NaN).toBeNaN();
  });

  it('Deve testar o uso do matcher toBeGreatherThan', () => {
    expect(10).toBeGreaterThan(1);
  });

  it('Deve testar o uso do matcher toBeLessThan', () => {
    expect(10).toBeLessThan(20);
  });

  it('Deve testar o uso do matcher toBeCloseTo', () => {
    expect(35.2).toBeCloseTo(35.25, -2);
  });

  it('Deve testar o uso do matcher toMatch', () => {
    expect('Marvel').toMatch(/Marv/);
  });

  it('Deve testar o uso do matcher toThrow', () => {
    expect(function () {
      throw new Error('Meu erro');
    }).toThrow();
  });
});
