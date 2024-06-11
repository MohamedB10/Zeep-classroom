import { Injectable } from '@angular/core';
import { Cours } from '../models/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor() {}
  private cours: Cours[]  = [
    {
      id: 1,
      title: 'Infographie 2D',
      subTitle: 'Initiation à photoshop',
      description: "Que vous soyez passionnés de photographie, de graphisme ou simplement de création numérique, ce cours vous donnera les compétences dont vous avez besoin pour réaliser vos projets.",
      imageUrl: "eeeee",
      price: 65000,
      level: 'Facile',
      duration: 1,
      createdDate: new Date(),
      updatedDate: new Date()
    },
    {
      id: 2,
      title: 'Developpement',
      subTitle: 'Création de site web avec HTML&CSS',
      description: "Que vous soyez passionnés de photographie, de graphisme ou simplement de création numérique, ce cours vous donnera les compétences dont vous avez besoin pour réaliser vos projets.",
      imageUrl: "eeeee",
      price: 45000,
      level: 'Moyen',
      duration: 1,
      createdDate: new Date(),
      updatedDate: new Date()
    },
    {
      id: 3,
      title: 'Developpement',
      subTitle: 'Création de site web avec HTML&CSS',
      description: "Que vous soyez passionnés de photographie, de graphisme ou simplement de création numérique, ce cours vous donnera les compétences dont vous avez besoin pour réaliser vos projets.",
      imageUrl: "eeeee",
      price: 45000,
      level: 'Moyen',
      duration: 1,
      createdDate: new Date(),
      updatedDate: new Date()
    }
  ];

  getAllCourse(): Cours[] {
    return this.cours;
  }
}
