import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-re-button',
  standalone: true,
  imports: [],
  templateUrl: './re-button.component.html',
  styleUrl: './re-button.component.css'
})
export class ReButtonComponent {
  @Input() btnText : string = ''
  @Input() btnClass : string = ''
  @Output() onBtnClick = new EventEmitter<any>()

  onClick() {
    debugger
    this.onBtnClick.emit("Hi to child")

  }
}
