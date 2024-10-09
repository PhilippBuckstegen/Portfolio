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
      text: 'Test, dies ist eine gute Referenz',
      name: 'Lyonel Berzen',
      status: 'Team-Partner',
    },
    {
      text: 'This is an amazing colleague who helped me a lot.',
      name: 'Heiko Nickel',
      status: 'Frontend Developer',
    },
    {
      text: 'Philipp is a great team player and always delivers on time.',
      name: 'Marvin Dresp',
      status: 'Project Manager',
    },
    {
      text: 'Philipp has excellent skills and is a strong communicator.',
      name: 'Fabion Latifi',
      status: 'Team-Partner',
    },
  ];

  currentIndex = 1;

  nextReference() {
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
  }

  prevReference() {
    this.currentIndex =
      (this.currentIndex - 1 + this.references.length) % this.references.length;
  }

  getLeftIndex(): number {
    return (
      (this.currentIndex - 1 + this.references.length) % this.references.length
    );
  }

  getRightIndex(): number {
    return (this.currentIndex + 1) % this.references.length;
  }

  isVisible(index: number): boolean {
    return (
      index === this.currentIndex ||
      index === this.getLeftIndex() ||
      index === this.getRightIndex()
    );
  }
}
