import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertComponent } from '../../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('txtName') textBox? : ElementRef
  @ViewChild(AlertComponent) alertComp? : AlertComponent

  ngAfterViewInit(): void {
    debugger
    const value = this.textBox?.nativeElement.value
    console.log(value)
    const alertMode = this.alertComp?.alertMode
    console.log(alertMode)
    debugger
  }
}
