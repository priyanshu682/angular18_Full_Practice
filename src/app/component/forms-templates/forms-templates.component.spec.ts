import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsTemplatesComponent } from './forms-templates.component';

describe('FormsTemplatesComponent', () => {
  let component: FormsTemplatesComponent;
  let fixture: ComponentFixture<FormsTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsTemplatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
