import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotazioniServiziComponent } from './dotazioni-servizi.component';

describe('DotazioniServiziComponent', () => {
  let component: DotazioniServiziComponent;
  let fixture: ComponentFixture<DotazioniServiziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotazioniServiziComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotazioniServiziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
