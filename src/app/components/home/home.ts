import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListNames } from '../list-names/list-names';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ListNames],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  isModalOpen = false;
  // isModalClosed = false;
  openModal() {
    this.isModalOpen = true;
  }
  closeModal() {
    this.isModalOpen = false;
  }
  // closeButton() {
  //   this.isModalClosed = true;
  // }
}
