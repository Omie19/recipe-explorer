import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private apiUrl = 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3';
  data: any = [];
isSearched= false;
  constructor(private http: Http) {    
    }

  getData(key){
    let Url;
    if( key.ingredient && key.dish !=='undefined'){
       Url='http://www.recipepuppy.com/api/?i='+key.ingredient+'&q=' + key.dish;
    } 
    else if(key.ingredient){
       Url='http://www.recipepuppy.com/api/?i='+key.ingredient;
    }
    else if(key.dish !=='undefined'){
       Url='http://www.recipepuppy.com/api/?q=' + key.dish;
    }
    // let Url='http://www.recipepuppy.com/api/?i='+key.ingredient+'&q=' + key.dish;
    console.log(Url);
    return this.http.get(Url).map((res: Response) => (res.json().results))
  }

  getRecipe(key) {
    this.getData(key).subscribe(data => {
     this.isSearched=true;
      this.data = data;
      console.log(this.data);
    })
    
  }

  searchRecipe(key){

    console.log("In search Recipe "+ key.ingredient);
    console.log("In search Recipe "+ key.dish);
    this.getRecipe(key);
    
  }   

}
