import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
@Input() recipeList: any;

  constructor() { }

  ngOnInit() {
    console.log(this.recipeList);
    // this.recipeList.subscribe(data => console.log(data));
  }

}
