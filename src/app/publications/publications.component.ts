import { Component } from '@angular/core';
import { WebApiService } from '../Service/web-api.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-publications',
  imports: [NgFor, NgIf],
  providers: [WebApiService],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {
  publications: any[] = [];
  active: boolean[] = [];
  // Get the publications from the API
  ngOnInit() {
    this.get_publications();
    for (let i = 0; i < this.publications.length; i++) {
      this.publications[i].i = i;
      console.log(this.publications[i])
    }
    this.active = new Array(this.publications.length).fill(false);
  }

  constructor(private webApiService: WebApiService) { }

  get_publications() {
    this.webApiService.getPublications("http://localhost:3000").subscribe((response) => {
      console.log(response)
      this.publications = response.body;
    });
  }
  get_active(i: number) {
    return this.active[i];
  }
  get_inactive(i: number) {
    return !this.active[i];
  }
  update_active(i: number) {
    this.active[i] = !this.active[i];
  }
}
