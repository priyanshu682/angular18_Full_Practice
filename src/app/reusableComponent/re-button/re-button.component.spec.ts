import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReButtonComponent } from './re-button.component';

describe('ReButtonComponent', () => {
  let component: ReButtonComponent;
  let fixture: ComponentFixture<ReButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
