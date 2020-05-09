import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() showRecipe = new EventEmitter<string>();

  onNavigation(navString: string) {
    this.showRecipe.emit(navString);
  }

  constructor() {}

  ngOnInit(): void {}
}
