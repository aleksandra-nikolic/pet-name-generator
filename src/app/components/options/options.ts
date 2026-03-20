import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-options',
  imports: [RouterLink],
  templateUrl: './options.html',
  styleUrl: './options.css',
})
export class Options {
  selectedGender: string = '';
  selectedStyles: string[] = [];

  get isFormValid(): boolean {
    return this.selectedGender !== '' && this.selectedStyles.length > 0;
  }

  selectGender(gender: string): void {
    this.selectedGender = gender;
    console.log(this.selectedGender);
  }

  selectStyle(style: string, checked: boolean): void {
    if (checked) {
      this.selectedStyles.push(style);
    } else {
      this.selectedStyles = this.selectedStyles.filter((s) => s !== style);
    }
    console.log(this.selectedStyles);
  }
}
