import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    let savedLang = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(savedLang);
  }

  toggleLanguage() {
    let currentLang = this.translate.currentLang;
    let newLang = currentLang === 'en' ? 'de' : 'en';
    this.translate.use(newLang);
    localStorage.setItem('language', newLang);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }

  getProjectTranslation(projectId: number) {
    return {
      title: this.translate.get(`projects.${projectId}.title`),
      description: this.translate.get(`projects.${projectId}.description`),
    };
  }
}
