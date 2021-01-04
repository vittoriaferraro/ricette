import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients: Ingredients[] = [
    new Ingredients('tomato', 5),
    new Ingredients('pasta', 10),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
