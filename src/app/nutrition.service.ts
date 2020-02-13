
import {Injectable, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule, HttpErrorResponse} from '@angular/common/http';
import {BrowserModule} from "@angular/platform-browser";
import {Observable} from "rxjs";


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ]
})

@Injectable({
  providedIn: 'root'
})
export class NutritionService {
  private weather: Observable<Object>;

  constructor(private http: HttpClient) {
  }

  getNutritionValue(searchValue) {
    let url = 'https://api.nutritionix.com/v1_1/search/'+searchValue+'?results=0:1&fields=*&appId=2c6c793a&appKey=9ca5f46d55a5f76e21657adf0a2aeef4';
    console.log('url', url);
    console.log(this.http.get(url));
    return this.http.get(url);
  }
}
