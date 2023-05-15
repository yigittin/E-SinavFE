import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolumComponent } from './bolum.component';

describe('BolumComponent', () => {
  let component: BolumComponent;
  let fixture: ComponentFixture<BolumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
