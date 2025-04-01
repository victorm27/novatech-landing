import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  stats = [
    { value: '10+', label: 'Años de Experiencia' },
    { value: '200+', label: 'Proyectos Completados' },
    { value: '50+', label: 'Clientes Satisfechos' },
    { value: '20+', label: 'Expertos en Tecnología' }
  ];
}