import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAngularApp'

  @HostListener('window:scroll')
  onScroll(){
    console.log("Scrolling")
  }

 @HostListener('contextmenu')
  onRightClick(event:any){
    console.log("Right Click")
    // event.preventDefault()

  }
}
