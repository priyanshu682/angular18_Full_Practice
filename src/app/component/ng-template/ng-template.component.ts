import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {
  isUserLoggedIn: boolean = true
  userName: string = 'ABCD'
  templateNumber: number
  @ViewChild('dynamicTemp') dynamicTemplate: TemplateRef<any> | undefined

  @ViewChild('dynamicTemp1') dynamicTemplate1: TemplateRef<any> | undefined
  @ViewChild('dynamicTemp2') dynamicTemplate2: TemplateRef<any> | undefined
  @ViewChild('dynamicTemp3') dynamicTemplate3: TemplateRef<any> | undefined
  @ViewChild('dynamicTemp4') dynamicTemplate4: TemplateRef<any> | undefined
  @ViewChild('dynamicContainer1', { read: ViewContainerRef }) dynamicContainer1: ViewContainerRef | undefined
  @ViewChild('dynamicContainer2', { read: ViewContainerRef }) dynamicContainer2: ViewContainerRef | undefined


  constructor() {
    this.templateNumber = 0
  }
  loadTemplate() {
    this.dynamicContainer1?.createEmbeddedView(this.dynamicTemplate1!)
  }
  loadTemplate1(templateNumber: number) {
    if (templateNumber == 1) {
      this.dynamicContainer2?.createEmbeddedView(this.dynamicTemplate1!)

    } else if (templateNumber == 2) {
      this.dynamicContainer2?.createEmbeddedView(this.dynamicTemplate2!)

    } else if (templateNumber == 3) {
      this.dynamicContainer2?.createEmbeddedView(this.dynamicTemplate3!)

    } else if (templateNumber == 4) {
      this.dynamicContainer2?.createEmbeddedView(this.dynamicTemplate4!)

    } else {
      this.dynamicContainer2?.createEmbeddedView(this.dynamicTemplate!)
    }
  }
  show(){
    this.isUserLoggedIn = true
  }
  hide(){
    this.isUserLoggedIn = false
  }

}
