import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(public translate: TranslateService) {
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

  getProjectDescription(projectId: number): Observable<string> {
    return this.translate.get(
      `projects.projectDetails.${projectId}.description`
    );
  }

  getReferenceText(referenceId: number): Observable<string> {
    return this.translate.get(`references.entries.${referenceId}.text`);
  }

  onLanguageChange(): Observable<LangChangeEvent> {
    return this.translate.onLangChange;
  }
}
