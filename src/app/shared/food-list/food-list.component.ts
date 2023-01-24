import { Component, OnInit } from '@angular/core';

// Services
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<string> = [];

  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList();
    // Em outras linhas, a injeção seria:
    // let list = new FoodListService();
    // this.foodList = list.foodList()
  }

}
