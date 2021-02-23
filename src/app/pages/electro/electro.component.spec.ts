import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectroComponent } from './electro.component';

describe('ElectroComponent', () => {
  let component: ElectroComponent;
  let fixture: ComponentFixture<ElectroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
