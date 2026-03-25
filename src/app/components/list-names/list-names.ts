import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-names',
  imports: [],
  templateUrl: './list-names.html',
  styleUrl: './list-names.css',
})
export class ListNames {
  @Output() closeModal = new EventEmitter();

  close() {
    this.closeModal.emit();
  }
}
