import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  public recipes: Recipe[] = [
    new Recipe('patate', 'patate con salsa', 'https://get.pxhere.com/photo/dish-food-cuisine-ingredient-meat-taco-meal-produce-salad-side-dish-recipe-fried-food-mexican-food-lunch-american-food-brunch-appetizer-Tex-mex-food-greek-food-Latin-american-food-mixed-grill-1557385.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
