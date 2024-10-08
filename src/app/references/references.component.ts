import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Reference } from '../models/reference-list-interface';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss'
})
export class ReferencesComponent {

  references: Reference[] = [
    {
      text: 'Test, dies ist eine gute Referenz',
      name: 'Lyonel',
      status: 'Team-Partner'
    },
  ];

}
