import { Component } from '@angular/core';
import { Project } from '../models/project-list-interface';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  isOverlayOpen = false;
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 1,
      count: '01',
      title: 'Join',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      usedSkills: ['JavaScript', 'HTML', 'CSS', 'Firebase', 'Figma'],
      iconSkills: [
        '/assets/icons/Javascript.svg',
        '/assets/icons/html.svg',
        '/assets/icons/css.svg',
        '/assets/icons/Firebase.svg',
        '/assets/icons/figma.svg',
      ],
      image: '/assets/img/join-image-project.png',
      bgImage: '/assets/img/bg-image-project.png',
    },
    {
      id: 2,
      count: '02',
      title: 'El Pollo Loco',
      description:
        'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      usedSkills: ['JavaScript', 'HTML', 'CSS'],
      iconSkills: [
        '/assets/icons/Javascript.svg',
        '/assets/icons/html.svg',
        '/assets/icons/css.svg',
      ],
      image: '/assets/img/pollo-loco-image-project.png',
      bgImage: '/assets/img/bg-image-project.png',
    },
    {
      id: 3,
      count: '03',
      title: 'Portfolio Website',
      description:
        'My personal website presenting various programming projects. Get a first impression of me and my skills.',
      usedSkills: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Figma'],
      iconSkills: [
        '/assets/icons/Angular.svg',
        '/assets/icons/typescript.svg',
        '/assets/icons/html.svg',
        '/assets/icons/sass.svg',
        '/assets/icons/figma.svg',
      ],
      image: '/assets/img/join-image-project.png',
      bgImage: '/assets/img/bg-image-project.png',
    },
    {
      id: 4,
      count: '04',
      title: 'Pokedex',
      description:
        'Based on the PokéAPI, a simple library that provides and catalogues Pokémon information.',
      usedSkills: ['JavaScript', 'HTML', 'CSS', 'API'],
      iconSkills: [
        '/assets/icons/Javascript.svg',
        '/assets/icons/html.svg',
        '/assets/icons/css.svg',
        '/assets/icons/rest-api.svg',
      ],
      image: '/assets/img/join-image-project.png',
      bgImage: '/assets/img/bg-image-project.png',
    },
  ];

  constructor(private translationService: TranslationService) {}

  openOverlay(project: Project) {
    this.selectedProject = project;
    this.isOverlayOpen = true;

    let translation = this.translationService.getProjectTranslation(project.id);
    translation.title.subscribe((res) => this.selectedProject!.title = res);
    translation.description.subscribe((res) => this.selectedProject!.description = res);
  }

  closeOverlay() {
    this.isOverlayOpen = false;
    this.selectedProject = null;
  }

  showNextProject() {
    let currentIndex = this.projects.findIndex(
      (p) => p.id === this.selectedProject?.id
    );
    let nextIndex = (currentIndex + 1) % this.projects.length;
    this.selectedProject = this.projects[nextIndex];
  }

  getCombinedSkillsAndIcons(): { icon: string; skill: string }[] {
    if (!this.selectedProject) {
      return [];
    }
    return this.selectedProject.iconSkills.map((icon, index) => ({
      icon,
      skill: this.selectedProject?.usedSkills[index] || '',
    }));
  }
}
