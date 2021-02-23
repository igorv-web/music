import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndieComponent } from './indie.component';

describe('IndieComponent', () => {
  let component: IndieComponent;
  let fixture: ComponentFixture<IndieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
