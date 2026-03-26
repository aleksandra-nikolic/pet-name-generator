import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-names',
  imports: [],
  templateUrl: './list-names.html',
  styleUrl: './list-names.css',
})
export class ListNames {
  @Output() closeModal = new EventEmitter();
  favoriteNames: string[] = [];
  close() {
    this.closeModal.emit();
  }
  ngOnInit() {
    const data = localStorage.getItem('favoriteNames');
    this.favoriteNames = data ? JSON.parse(data) : [];
  }

  deleteName(name: string) {
    const index = this.favoriteNames.findIndex((n) => n === name);
    this.favoriteNames.splice(index, 1);
    localStorage.setItem('favoriteNames', JSON.stringify(this.favoriteNames));
  }
}
