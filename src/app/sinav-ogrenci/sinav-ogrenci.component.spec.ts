import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinavOgrenciComponent } from './sinav-ogrenci.component';

describe('SinavOgrenciComponent', () => {
  let component: SinavOgrenciComponent;
  let fixture: ComponentFixture<SinavOgrenciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinavOgrenciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinavOgrenciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
