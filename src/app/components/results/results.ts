import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-results',
  imports: [RouterLink, NgClass],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
  isClicked = false;
  onClick() {
    this.isClicked = true;
  }
}
