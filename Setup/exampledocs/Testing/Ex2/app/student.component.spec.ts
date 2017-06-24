import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { StudentComponent } from './student-component';

describe('StudentComponent (inline template)', () => {

  let comp:    StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(StudentComponent);

    comp = fixture.componentInstance; // StudentComponent test instance

    // query for the name <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('no name in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  it('should display original name', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.name);
  });

  it('should display a different test name', () => {
    comp.name = 'vt';
    fixture.detectChanges();
    expect(el.textContent).toContain('vt');
  });
});
