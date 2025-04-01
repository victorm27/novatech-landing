import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      icon: 'laptop-code',
      title: 'Desarrollo de Software',
      description: 'Creamos soluciones de software personalizadas, aplicaciones web y móviles adaptadas a las necesidades específicas de tu negocio.'
    },
    {
      icon: 'cloud',
      title: 'Servicios en la Nube',
      description: 'Facilitamos la migración a la nube, optimizamos infraestructuras existentes y gestionamos servicios cloud para maximizar el rendimiento.'
    },
    {
      icon: 'shield-alt',
      title: 'Ciberseguridad',
      description: 'Protegemos tus activos digitales con soluciones de seguridad avanzadas, evaluaciones de vulnerabilidad y planes de respuesta a incidentes.'
    },
    {
      icon: 'chart-bar',
      title: 'Analítica de Datos',
      description: 'Transformamos tus datos en información valiosa con soluciones de BI, análisis predictivo y visualización de datos.'
    },
    {
      icon: 'robot',
      title: 'Inteligencia Artificial',
      description: 'Implementamos soluciones basadas en IA y machine learning para automatizar procesos y mejorar la toma de decisiones.'
    },
    {
      icon: 'users-cog',
      title: 'Consultoría IT',
      description: 'Ofrecemos asesoramiento estratégico en tecnología, optimización de procesos y transformación digital para tu empresa.'
    }
  ];
}