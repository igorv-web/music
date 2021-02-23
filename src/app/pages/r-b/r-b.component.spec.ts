import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBComponent } from './r-b.component';

describe('RBComponent', () => {
  let component: RBComponent;
  let fixture: ComponentFixture<RBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
