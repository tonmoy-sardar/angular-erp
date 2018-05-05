import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnReverseAddComponent } from './grn-reverse-add.component';

describe('GrnReverseAddComponent', () => {
  let component: GrnReverseAddComponent;
  let fixture: ComponentFixture<GrnReverseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnReverseAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnReverseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
