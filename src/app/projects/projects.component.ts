import { Component } from '@angular/core';
import { Project } from '../models/project-list-interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      id: 1,
      title: 'Join',
      usedSkills: ['JavaScript', 'HTML', 'CSS', 'Figma']
    },
    {
      id: 2,
      title: 'El Pollo Loco',
      usedSkills: ['JavaScript', 'HTML', 'CSS', 'OOP']
    },
    {
      id: 3,
      title: 'Portfolio Website',
      usedSkills: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Figma']
    },
    {
      id: 4,
      title: 'Pokedex',
      usedSkills: ['JavaScript', 'HTML', 'CSS', 'API']
    }
  ];

}
