import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Student {
  name: string;
  photo: string;
  website?: string;
  email: string;
  bio: string;
  type: 'phd' | 'undergrad' | 'alumni';
  isExpanded: boolean;
  nextSteps?: string;
  degree?: 'PhD' | 'BS' | 'MS';
}

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent {
  students: Student[] = [
    {
      name: 'Ethan Beaird',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'email@utulsa.edu',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      type: 'undergrad',
      isExpanded: false
    },
    {
      name: 'Jacob Brue',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'email@utulsa.edu',
      bio: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      type: 'phd',
      isExpanded: false
    },
    {
      name: 'Mikey Ferguson',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'email@utulsa.edu',
      bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      type: 'undergrad',
      isExpanded: false
    },
    {
      name: 'Timmy Flavin',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'email@utulsa.edu',
      bio: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      type: 'phd',
      isExpanded: false
    },
    {
      name: 'Zachary Gaskins',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'email@utulsa.edu',
      bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      type: 'undergrad',
      isExpanded: false
    },
    {
      name: 'Zachary Gray',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'email@utulsa.edu',
      bio: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      type: 'undergrad',
      isExpanded: false
    },
    {
      name: 'Marina Katoh',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'email@utulsa.edu',
      bio: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
      type: 'undergrad',
      isExpanded: false
    },
    {
      name: 'Bryan Lavender',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'email@utulsa.edu',
      bio: 'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
      type: 'phd',
      isExpanded: false
    },
    {
      name: 'Dale Peasley',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'email@utulsa.edu',
      bio: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
      type: 'phd',
      isExpanded: false
    },
    {
      name: 'Eric Peterson',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'email@utulsa.edu',
      bio: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
      type: 'phd',
      isExpanded: false
    },
    {
      name: 'William Pittenger',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'email@utulsa.edu',
      bio: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.',
      type: 'undergrad',
      isExpanded: false
    },
    {
      name: 'Joe Shymanski',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'email@utulsa.edu',
      bio: 'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi.',
      type: 'phd',
      isExpanded: false
    },
    {
      name: 'TestAlumni1',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'alumni1@example.com',
      bio: '',
      type: 'alumni',
      isExpanded: false,
      degree: 'BS',
      nextSteps: 'Assistant Professor at MIT'
    },
    {
      name: 'TestAlumni2',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'alumni2@example.com',
      bio: '',
      type: 'alumni',
      isExpanded: false,
      degree: 'PhD',
      nextSteps: 'Assistant Professor at MIT'
    },
    {
      name: 'TestAlumni3',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'alumni3@example.com',
      bio: '',
      type: 'alumni',
      isExpanded: false,
      degree: 'MS',
      nextSteps: 'Assistant Professor at UT'
    },
    {
      name: 'TestAlumni4',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'alumni4@example.com',
      bio: '',
      type: 'alumni',
      isExpanded: false,
      degree: 'BS',
      nextSteps: 'Assistant Professor at UT'
    },
    {
      name: 'TestAlumni5',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'alumni5@example.com',
      bio: '',
      type: 'alumni',
      isExpanded: false,
      degree: 'PhD',
      nextSteps: 'Assistant Professor at UT'
    },
    {
      name: 'TestAlumni6',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'alumni6@example.com',
      bio: '',
      type: 'alumni',
      isExpanded: false,
      degree: 'MS',
      nextSteps: 'Assistant Professor at UT'
    },
    {
      name: 'TestAlumni7',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'alumni7@example.com',
      bio: '',
      type: 'alumni',
      isExpanded: false,
      degree: 'BS',
      nextSteps: 'Assistant Professor at UT'
    },
    {
      name: 'TestAlumni8',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'alumni8@example.com',
      bio: '',
      type: 'alumni',
      isExpanded: false,
      degree: 'PhD',
      nextSteps: 'Assistant Professor at UT'
    },
    {
      name: 'TestAlumni9',
      photo: '/students/default-student.jpg',
      website: 'https://website.com',
      email: 'alumni9@example.com',
      bio: '',
      type: 'alumni',
      isExpanded: false,
      degree: 'MS',
      nextSteps: 'Assistant Professor at UT'
    }
  ];

  toggleBio(student: Student) {
    student.isExpanded = !student.isExpanded;
  }
}
