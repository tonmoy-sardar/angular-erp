import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnReverseEditComponent } from './grn-reverse-edit.component';

describe('GrnReverseEditComponent', () => {
  let component: GrnReverseEditComponent;
  let fixture: ComponentFixture<GrnReverseEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnReverseEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnReverseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
