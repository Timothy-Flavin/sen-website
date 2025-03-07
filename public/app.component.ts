import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../src/app/footer/footer.component";
import { HomeComponent } from "../src/app/home/home.component";
import { HeaderComponent } from "../src/app/header/header.component";
import { MembersComponent } from "../src/app/members/members.component";
import { NgIf } from '@angular/common';
import { PublicationsComponent } from "../src/app/publications/publications.component";
import { ProjectsComponent } from '../src/app/projects/projects.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HomeComponent, HeaderComponent, NgIf, MembersComponent, PublicationsComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sen-website';
  state = "home"
  handleStateUpdate(target: string) {
    console.log("we got the target" + target)
    this.state = target
  }
  isHome() {
    console.log("yeet yeet")
    return this.state === 'home'
  }
}
