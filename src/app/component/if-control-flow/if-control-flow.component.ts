import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-if-control-flow',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-control-flow.component.html',
  styleUrl: './if-control-flow.component.css'
})
export class IfControlFlowComponent {
  isDiv1Visible: boolean = false
  div2ChangeColor: boolean = false
  num1 = ''
  num2 = ''
  selectedStatus = ''

  hideDiv1() {
    this.isDiv1Visible = false
  }

  showDiv1() {
    this.isDiv1Visible = true
  }
  toggleDiv2Color(){
    this.div2ChangeColor = !this.div2ChangeColor
  }
}
