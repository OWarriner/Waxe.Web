import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';  

@Component({
  selector: 'app-collectiongrid',
  templateUrl: './collectiongrid.component.html',
  styleUrls: ['./collectiongrid.component.css']
})
export class CollectiongridComponent implements OnInit {

  private filtersOpened: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  toggleFilter()
  {
    this.filtersOpened = !this.filtersOpened;
  }

}

/*   foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ]; */

