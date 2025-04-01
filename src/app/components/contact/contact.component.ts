import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  success = false;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern('^[0-9]{9,10}$')],
      company: [''],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  onSubmit() {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      // Aquí iría la lógica para enviar el formulario a un backend
      console.log(this.contactForm.value);
      this.success = true;
      this.contactForm.reset();
      this.submitted = false;
      
      // Resetear el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        this.success = false;
      }, 5000);
    }
  }
  
  get f() {
    return this.contactForm.controls;
  }
}