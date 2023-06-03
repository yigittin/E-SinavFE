import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinavDetayComponent } from './sinav-detay.component';

describe('SinavDetayComponent', () => {
  let component: SinavDetayComponent;
  let fixture: ComponentFixture<SinavDetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinavDetayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinavDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
