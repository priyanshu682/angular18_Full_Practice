import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-event',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-event.component.html',
  styleUrl: './lifecycle-event.component.css'
})
export class LifecycleEventComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  firstName: string

  constructor() {
    console.log('constructor called')
    this.firstName = ""
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called')
  }
}
