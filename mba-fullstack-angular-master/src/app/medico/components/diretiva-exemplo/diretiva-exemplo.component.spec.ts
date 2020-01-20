import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaExemploComponent } from './diretiva-exemplo.component';

describe('DiretivaExemploComponent', () => {
  let component: DiretivaExemploComponent;
  let fixture: ComponentFixture<DiretivaExemploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaExemploComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
