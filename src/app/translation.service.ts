import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: TranslateService) {
    // Setzt die Standardsprache und lädt die gespeicherte Sprache
    let savedLang = localStorage.getItem('language') || 'en';
    this.translate.setDefaultLang('en');
    this.translate.use(savedLang);
  }

  // Methode zum Umschalten der Sprache
  toggleLanguage() {
    let currentLang = this.translate.currentLang;
    let newLang = currentLang === 'en' ? 'de' : 'en';
    this.translate.use(newLang);
    localStorage.setItem('language', newLang); // Speichert die Sprache
  }

  // Methode zum Abrufen der aktuellen Sprache
  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
