import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForControlFlowComponent } from './for-control-flow.component';

describe('ForControlFlowComponent', () => {
  let component: ForControlFlowComponent;
  let fixture: ComponentFixture<ForControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForControlFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
