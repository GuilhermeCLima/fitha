import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDelComponent } from './categoria-del.component';

describe('CategoriaDelComponent', () => {
  let component: CategoriaDelComponent;
  let fixture: ComponentFixture<CategoriaDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
