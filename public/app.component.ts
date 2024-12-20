import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../src/app/footer/footer.component";
import { HomeComponent } from "../src/app/home/home.component";
import { HeaderComponent } from "../src/app/header/header.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, HomeComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sen-website';
}
