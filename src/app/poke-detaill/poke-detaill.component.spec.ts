import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetaillComponent } from './poke-detaill.component';

describe('PokeDetaillComponent', () => {
  let component: PokeDetaillComponent;
  let fixture: ComponentFixture<PokeDetaillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeDetaillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
