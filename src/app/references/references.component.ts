import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reference } from '../models/reference-list-interface';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent {
  references: Reference[] = [
    {
      text: 'Philipp is an extremely reliable and friendly team colleague. He always comes up with great ideas and contributes significantly to the success of our team. His positive attitude and creativity are a real asset to us all.',
      name: 'Lyonel Berzen',
      status: 'Team-Partner',
    },
    {
      text: 'This is an amazing colleague who helped me a lot.',
      name: 'Heiko Nickel',
      status: 'Team-Partner',
    },
    {
      text: 'Philipp is a great team player and always delivers on time.',
      name: 'Marvin Dresp',
      status: 'Team-Partner',
    },
    {
      text: 'Philipp has excellent skills and is a strong communicator.',
      name: 'Fabion Latifi',
      status: 'Team-Partner',
    },
  ];

  constructor() {
    (window as any).references = this.references;
  }

  currentIndex = 0;
  animate = false;
  isAnimatingPrev = false;
  isAnimatingNext = false;

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
