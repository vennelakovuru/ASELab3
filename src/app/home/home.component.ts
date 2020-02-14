import {Component, OnInit} from '@angular/core';
import {NutritionService} from '../nutrition.service'

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

  getValue(): void {
    responsiveVoice.speak('Nutition value of' + this.searchValue);
    this.nutritionService.getNutritionValue(this.searchValue).subscribe(data => {
      this.nutritionInfo = data;
      console.log(this.nutritionInfo);
    })
  }

  ngOnInit() {
  }

}
