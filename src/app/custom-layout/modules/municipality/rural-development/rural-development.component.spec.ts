import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuralDevelopmentComponent } from './rural-development.component';

describe('RuralDevelopmentComponent', () => {
  let component: RuralDevelopmentComponent;
  let fixture: ComponentFixture<RuralDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuralDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuralDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
