import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}'),
        ],
      ],
      message: ['', [Validators.required, Validators.minLength(4)]],
      privacyPolicy: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      this.http.post('your-backend-endpoint.php', formData).subscribe({
        next: () => {
          this.formSubmitted = true;
          console.log('Form submitted successfully.');
          this.contactForm.reset();
          this.contactForm.markAsUntouched();
        },
        error: (error) => {
          console.error('Error submitting form:', error);
        },
      });
    }
  }

  triggerValidation() {
    this.contactForm.markAllAsTouched();
  }
}
