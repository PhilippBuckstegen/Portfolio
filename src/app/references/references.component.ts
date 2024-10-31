import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reference } from '../models/reference-list-interface';
import { TranslationService } from '../translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent implements OnDestroy {
  references: Reference[] = [
    {
      text: 'Philipp is an extremely reliable and friendly team colleague. He always comes up with great ideas and contributes significantly to the success of our team. His positive attitude and creativity are a real asset to us all.',
      name: 'Lyonel Berzen',
      status: 'Team Partner',
    },
    {
      text: 'Philipp played a key role in the success of our project with his dedication and ability to manage all tasks effectively. His expertise in CSS, JavaScript, and HTML, along with his valuable input, enriched the team. His friendly and motivating nature also helped maintain high team morale.',
      name: 'Heiko Nickel',
      status: 'Team Partner',
    },
    {
      text: 'Philipp proved to be a highly competent and dedicated colleague in programming. His quick understanding and creative problem-solving were impressive. Always helpful, he provided focused support on challenging tasks. His commitment ensured our projects were completed successfully and on time, making his solution-oriented approach and team spirit invaluable.',
      name: 'Marvin Dresp',
      status: 'Team Partner',
    },
    {
      text: 'Philipp was a natural leader who fostered a positive, collaborative environment. He assigned tasks based on team strengths and often tackled the toughest challenges himself. His ability to find practical solutions to complex problems and his attention to detail not only improved project quality but also inspired the team to excel.',
      name: 'Fabion Latifi',
      status: 'Team Partner',
    },
  ];

  currentIndex = 1;
  animate = false;
  isAnimatingPrev = false;
  isAnimatingNext = false;

  private langChangeSubscription: Subscription;

  constructor(private translationService: TranslationService) {
    (window as any).references = this.references;
    this.loadReferenceTexts();

    this.langChangeSubscription = this.translationService
      .onLanguageChange()
      .subscribe(() => {
        this.loadReferenceTexts();
      });
  }

  loadReferenceTexts() {
    this.references.forEach((reference, index) => {
      const referenceId = index + 1;
      this.translationService
        .getReferenceText(referenceId)
        .subscribe((translatedText) => {
          reference.text = translatedText;
        });
    });
  }

  ngOnDestroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }

  getVisibleReferences() {
    return [
      this.references[this.getLeftIndex()],
      this.references[this.currentIndex],
      this.references[this.getRightIndex()],
    ];
  }

  nextReference() {
    this.animate = true;
    this.isAnimatingNext = true;
    setTimeout(() => {
      this.isAnimatingNext = false;
      this.currentIndex = (this.currentIndex + 1) % this.references.length;
      this.animate = false;
    }, 200);
  }

  prevReference() {
    this.animate = true;
    this.isAnimatingPrev = true;
    setTimeout(() => {
      this.isAnimatingPrev = false;
      this.currentIndex =
        (this.currentIndex - 1 + this.references.length) %
        this.references.length;
      this.animate = false;
    }, 200);
  }

  getLeftIndex() {
    return (
      (this.currentIndex - 1 + this.references.length) % this.references.length
    );
  }

  getRightIndex() {
    return (this.currentIndex + 1) % this.references.length;
  }
}
