import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslationService } from '../../translation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;
  imgSrc = './assets/img/default_lang.svg';
  isDefaultImage = true;

  constructor(
    private router: Router,
    private translationServive: TranslationService
  ) {}

  toggleImage() {
    if (this.isDefaultImage) {
      this.imgSrc = './assets/img/german.svg';
      this.translationServive.toggleLanguage();
      this.isDefaultImage = false;
    } else {
      this.imgSrc = './assets/img/default_lang.svg';
      this.translationServive.toggleLanguage();
      this.isDefaultImage = true;
    }
  }

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
    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
