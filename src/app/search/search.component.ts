import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onbtnClicked: EventEmitter<any> = new EventEmitter<any>();
  searchvalue: String;
  searchdish: String;

  constructor() {
    this.searchvalue = '';
   }

  ngOnInit() {
  }
 
  public Searchtext(){
   let values ={
    ingredient : this.searchvalue,
    dish : this.searchdish
    }
    this.onbtnClicked.emit(values);
   
  }

}
