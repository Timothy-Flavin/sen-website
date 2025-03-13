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
  active: boolean[] = [];
  loading: boolean = true;
  ascending: boolean = true;
  active_project_type = 0;
  projects: any[] = [
    { id: 0, name: 'Any', description: 'All Papers' },
    { id: 1, name: 'Unassigned', description: 'Publications which do not fall into common lab categories' },
    { id: 2, name: 'RL', description: 'Reinforcement Learning and Multi-Agent Reinforcement learning' },
    { id: 3, name: 'XAI', description: 'Explainable and Interpretable AI' },
    { id: 3, name: 'Genetic Algorithms', description: 'Explainable and Interpretable AI' },
  ]
  students: any[] = [
    { id: 1, name: 'Ethan Beaird', photo: '/students/default-student.jpg' },
  ];
  // Get the publications from the API
  ngOnInit() {
    this.loading = true;
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
      this.loading = false;
      this.update_display_publications();
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
  sort_date(order: string) {
    if (order == 'asc') { this.ascending = true; }
    else { this.ascending = false; }
    console.log(this.ascending)
    this.publications.sort((a, b) => {
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
  }
}
