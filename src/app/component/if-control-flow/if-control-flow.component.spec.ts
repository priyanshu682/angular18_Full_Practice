import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfControlFlowComponent } from './if-control-flow.component';

describe('IfControlFlowComponent', () => {
  let component: IfControlFlowComponent;
  let fixture: ComponentFixture<IfControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfControlFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
