import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OptionsService } from '../../services/options.service';

@Component({
  selector: 'app-options',
  imports: [RouterLink],
  templateUrl: './options.html',
  styleUrl: './options.css',
})
export class Options {
  constructor(private optionsService: OptionsService) {}

  get isFormValid(): boolean {
    return (
      this.optionsService.selectedGender !== '' && this.optionsService.selectedStyles.length > 0
    );
  }

  selectGender(gender: string): void {
    this.optionsService.selectedGender = gender;
  }

  selectStyle(style: string, checked: boolean): void {
    if (checked) {
      this.optionsService.selectedStyles.push(style);
    } else {
      this.optionsService.selectedStyles = this.optionsService.selectedStyles.filter(
        (s) => s !== style,
      );
    }
  }
}
