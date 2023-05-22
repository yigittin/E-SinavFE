import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgrenciComponent } from './ogrenci.component';

describe('OgrenciComponent', () => {
  let component: OgrenciComponent;
  let fixture: ComponentFixture<OgrenciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OgrenciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OgrenciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
