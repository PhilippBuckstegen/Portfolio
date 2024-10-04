import { Component } from '@angular/core';
import { Project } from '../models/project-list-interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  isOverlayOpen = false;
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 1,
      count: '01',
      title: 'Join',
      usedSkills: ['JavaScript', 'HTML', 'CSS', 'Figma'],
      image: '/assets/img/join-image-project.png',
      bgImage: '/assets/img/bg-image-project.png',
    },
    {
      id: 2,
      count: '02',
      title: 'El Pollo Loco',
      usedSkills: ['JavaScript', 'HTML', 'CSS', 'OOP'],
      image: '/assets/img/pollo-loco-image-project.png',
      bgImage: '/assets/img/bg-image-project.png',
    },
    {
      id: 3,
      count: '03',
      title: 'Portfolio Website',
      usedSkills: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Figma'],
      image: '/assets/img/join-image-project.png',
      bgImage: '/assets/img/bg-image-project.png',
    },
    {
      id: 4,
      count: '04',
      title: 'Pokedex',
      usedSkills: ['JavaScript', 'HTML', 'CSS', 'API'],
      image: '/assets/img/join-image-project.png',
      bgImage: '/assets/img/bg-image-project.png',
    }
  ];

  openOverlay(project: Project) {
    this.selectedProject = project;
    this.isOverlayOpen = true;
  }

  closeOverlay() {
    this.isOverlayOpen = false;
    this.selectedProject = null;
  }

}
