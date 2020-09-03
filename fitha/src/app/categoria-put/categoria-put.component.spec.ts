import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaPutComponent } from './categoria-put.component';

describe('CategoriaPutComponent', () => {
  let component: CategoriaPutComponent;
  let fixture: ComponentFixture<CategoriaPutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaPutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaPutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
