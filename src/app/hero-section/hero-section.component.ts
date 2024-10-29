import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
})
export class HeroSectionComponent {
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
