import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinifDetayComponent } from './sinif-detay.component';

describe('SinifDetayComponent', () => {
  let component: SinifDetayComponent;
  let fixture: ComponentFixture<SinifDetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinifDetayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinifDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
