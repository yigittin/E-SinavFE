import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniflarComponent } from './siniflar.component';

describe('SiniflarComponent', () => {
  let component: SiniflarComponent;
  let fixture: ComponentFixture<SiniflarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiniflarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiniflarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
