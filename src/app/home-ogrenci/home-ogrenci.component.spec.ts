import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOgrenciComponent } from './home-ogrenci.component';

describe('HomeOgrenciComponent', () => {
  let component: HomeOgrenciComponent;
  let fixture: ComponentFixture<HomeOgrenciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeOgrenciComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOgrenciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
