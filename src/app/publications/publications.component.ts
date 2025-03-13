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
  display_publications: any[] = [];
  loading: boolean = true;
  getting_publications: boolean = true;
  getting_members: boolean = true;
  getting_projects: boolean = true;
  ascending: boolean = true;
  active_project_type = 0;
  projects: any[] = []
  members: any[] = [];

  constructor(private webApiService: WebApiService) { }

  // Get the publications from the API
  ngOnInit() {
    this.loading = true;
    this.get_publications();
    this.get_members();
    this.get_projects();
    console.log("in ngafter init")
    console.log(this.publications)
    console.log(this.display_publications)
    console.log("done ngafter init")
  }


  get_publications() {
    this.getting_publications = true;
    this.webApiService.getPublications("http://localhost:3000/publications").subscribe((response) => {
      console.log(response)
      this.publications = response.body;
      this.getting_publications = false;
      this.add_websites();
    });
  }

  get_members() {
    this.getting_members = true;
    return this.webApiService.getPublications("http://localhost:3000/members").subscribe((response) => {
      console.log(response)
      this.members = response.body;
      this.getting_members = false;
      this.add_websites();
    });
  }

  get_projects() {
    this.getting_projects = true;
    this.webApiService.getPublications("http://localhost:3000/projects").subscribe((response) => {
      console.log(response)
      this.projects = response.body;
      this.getting_projects = false;
      this.add_websites();
    });
  }

  add_websites() {
    if (this.getting_members || this.getting_publications || this.getting_projects) {
      console.log("Not ready to add websites")
      return;
    }
    console.log("Adding websites")

    for (let i = 0; i < this.publications.length; i++) {
      this.publications[i].i = i;
      console.log(this.publications[i])
      this.publications[i].websites = [];
      this.publications[i].active = false;
      // Get the website for each author
      // Check if the author is in the members list and get their website
      for (let author_num = 0; author_num < this.publications[i].authors.length; author_num++) {
        let author = this.publications[i].authors[author_num];
        this.publications[i].websites.push(null);
        for (let m = 0; m < this.members.length; m++) {
          console.log(author)
          if (String(author).toLowerCase() == (String(this.members[m].LastName).toLowerCase() + ', ' + String(this.members[m].FirstName).toLowerCase())) {
            this.publications[i].websites[author_num] = this.members[m].Website;
          }
        }
      }
    }
    this.update_display_publications();
    console.log(this.publications)
    console.log(this.display_publications)
    console.log("after adding websites ^ ")
    this.loading = false;
  }



  get_active(i: number) {
    return this.display_publications[i].active;
  }
  get_inactive(i: number) {
    return !this.display_publications[i].active;
  }
  update_active(i: number) {
    this.display_publications[i].active = !this.display_publications[i].active;
  }
  sort_date(order: string) {
    if (order == 'asc') { this.ascending = true; }
    else { this.ascending = false; }
    console.log(this.ascending)
    this.display_publications.sort((a, b) => {
      return order === 'asc' ? new Date(a.date).getTime() - new Date(b.date).getTime() : new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }
  update_active_project_type(e: any) {
    console.log(e.target)
    let i = parseInt(e.target.value);
    this.active_project_type = i;
    this.update_display_publications();
  }
  update_display_publications() {
    console.log(this.active_project_type)
    console.log("We are updating display")
    this.display_publications = this.publications.filter((publication) => {
      console.log(publication.projectID, this.active_project_type)
      if (this.active_project_type == 0) return true;
      return publication.projectID == this.active_project_type;
    });
    this.sort_date(this.ascending ? 'asc' : 'desc');
  }
}
