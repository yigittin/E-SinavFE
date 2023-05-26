import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DersDetayComponent } from './ders-detay.component';

describe('DersDetayComponent', () => {
  let component: DersDetayComponent;
  let fixture: ComponentFixture<DersDetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DersDetayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DersDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
