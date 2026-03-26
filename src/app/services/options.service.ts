import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OptionsService {
  selectedGender: string = '';
  selectedStyles: string[] = [];
}
