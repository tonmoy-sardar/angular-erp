import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrnReverseComponent } from './grn-reverse.component';

describe('GrnReverseComponent', () => {
  let component: GrnReverseComponent;
  let fixture: ComponentFixture<GrnReverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrnReverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrnReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
