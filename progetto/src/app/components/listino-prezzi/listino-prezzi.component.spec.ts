import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinoPrezziComponent } from './listino-prezzi.component';

describe('ListinoPrezziComponent', () => {
  let component: ListinoPrezziComponent;
  let fixture: ComponentFixture<ListinoPrezziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListinoPrezziComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListinoPrezziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
