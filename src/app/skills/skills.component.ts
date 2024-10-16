import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  constructor(private router: Router) {}

  scrollToSection(section: string) {
    let element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  navigateAndScroll(section: string) {
    if (this.router.url === '/') {
      this.scrollToSection(section);
    } else {
      this.router.navigate(['/']).then(() => {
        this.scrollToSection(section);
      });
    }
  }
}
