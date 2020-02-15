import {Component, OnInit} from '@angular/core';
import {NutritionService} from '../nutrition.service'
import {ifStmt} from "@angular/compiler/src/output/output_ast";

declare var $: any;
declare const responsiveVoice: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private nutritionService: NutritionService) {
  }

  nutritionInfo = null;
  searchValue = '';
  prevSearchValue = '';
  searchDone: boolean = false;

  getValue(): void {
    this.nutritionInfo = null;
    this.prevSearchValue = this.searchValue;
    responsiveVoice.speak('' + this.searchValue);
    this.nutritionService.getNutritionValue(this.searchValue).subscribe(data => {
      this.nutritionInfo = data;
      this.searchDone = true;
    })
  }

  ngOnInit() {
  }

}
