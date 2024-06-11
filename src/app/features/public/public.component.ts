import { Component } from '@angular/core';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [CarouselComponent, CatalogueComponent],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss'
})
export class PublicComponent {

}
