import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExemploComponent } from './pipe-exemplo.component';

describe('PipeExemploComponent', () => {
  let component: PipeExemploComponent;
  let fixture: ComponentFixture<PipeExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
