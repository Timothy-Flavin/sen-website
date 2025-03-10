import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  current_page: string = "home"
  pages: string[] = ["home", "publications", "projects", "students", "gallery"]
  @Output() stateChange = new EventEmitter<any>();
  // When menu buttons are clicked change the page https://sites.utulsa.edu/multiagent-systems/
  changeState(target: string) {
    if (this.pages.includes(target)) {
      this.current_page = target
      this.stateChange.emit(target)
      //console.log(this.current_page)
    }
    else {
      throw new Error("Target Page is not in page list")
    }
  }
}
