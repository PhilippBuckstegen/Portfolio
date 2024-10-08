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
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      usedSkills: ['JavaScript', 'HTML', 'CSS', 'Firebase', 'Figma'],
      iconSkills: [
        '/assets/icons/Javascript.svg',
        '/assets/icons/html.svg',
        '/assets/icons/css.svg',
        '/assets/icons/Firebase.svg',
        '/assets/icons/figma.svg'
      ],
      image: '/assets/img/join-image-project.png',
      bgImage: '/assets/img/bg-image-project.png',
    },
    {
      id: 2,
      count: '02',
      title: 'El Pollo Loco',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      usedSkills: ['JavaScript', 'HTML', 'CSS', 'OOP'],
      iconSkills: ['/assets/icons/html.svg',],
      image: '/assets/img/pollo-loco-image-project.png',
      bgImage: '/assets/img/bg-image-project.png',
    },
    {
      id: 3,
      count: '03',
      title: 'Portfolio Website',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      usedSkills: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Figma'],
      iconSkills: ['/assets/icons/html.svg',],
      image: '/assets/img/join-image-project.png',
      bgImage: '/assets/img/bg-image-project.png',
    },
    {
      id: 4,
      count: '04',
      title: 'Pokedex',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      usedSkills: ['JavaScript', 'HTML', 'CSS', 'API'],
      iconSkills: ['/assets/icons/html.svg',],
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

  getCombinedSkillsAndIcons(): {icon: string, skill: string}[] {
    if (!this.selectedProject) {
      return [];
    }
    return this.selectedProject.iconSkills.map((icon, index) => ({
      icon,
      skill: this.selectedProject?.usedSkills[index] || ''
    }));
  }

}
