import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { GenderPet, StyleName } from '../../models/pet-name.model';
import { petNames } from '../../data/names';
import { OptionsService } from '../../services/options.service';
@Component({
  selector: 'app-results',
  imports: [RouterLink, NgClass],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
  constructor(private optionsService: OptionsService) {}

  names: GenderPet = petNames;
  randomName: string = '';
  allNames: string[] = [];
  favoritesNames: string[] = [];

  isClicked = false;
  onClick() {
    this.isClicked = true;
  }

  getRandomName() {
    this.isClicked = false;
    this.allNames = [];
    const gender = this.optionsService.selectedGender as keyof GenderPet;
    this.optionsService.selectedStyles.forEach((style) => {
      this.allNames = [...this.allNames, ...this.names[gender][style as keyof StyleName]];
    });

    const randomIndex = Math.floor(Math.random() * this.allNames.length);
    this.randomName = this.allNames[randomIndex];
  }
  ngOnInit() {
    this.getRandomName();
  }
  addToFavorites() {
    const data = localStorage.getItem('favoriteNames');
    this.favoritesNames = data ? JSON.parse(data) : [];
    this.favoritesNames.push(this.randomName);
    localStorage.setItem('favoriteNames', JSON.stringify(this.favoritesNames));
  }
}
