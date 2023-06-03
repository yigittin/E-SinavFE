import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinavComponent } from './sinav.component';

describe('SinavComponent', () => {
  let component: SinavComponent;
  let fixture: ComponentFixture<SinavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
