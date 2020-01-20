import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentComponetComponent } from './ng-content-componet.component';

describe('NgContentComponetComponent', () => {
  let component: NgContentComponetComponent;
  let fixture: ComponentFixture<NgContentComponetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentComponetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentComponetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
