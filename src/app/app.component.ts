import { Component, isDevMode, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { Pet } from "./interfaces/Pets";
import { Owner } from "./interfaces/Owners";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AGL-cats';
  owners:Owner[] = [];
  pets:Pet[] = [];
  showResults:Boolean;
  loading:Boolean;

  constructor(public rest:RestService) { }  
  
  ngOnInit() {
    this.getCatList();
  }

  getCatList() {
    this.owners = [];
    this.pets = [];
    this.showResults = false;
    this.loading = true;
    this.rest.getOwners().subscribe((data: []) => {
      if (isDevMode()) console.log(data);
      this.owners = data;
 
      // remove owners without pets
      this.owners = this.owners.filter (owner => owner.pets != null);
      // inherit owner's gender for each pet (alternative: create an Owner component and do it there)
      this.owners.map (owner => owner.pets.map (pet => pet.ownerGender = owner.gender));
      // extract all the cats in a single array
      this.pets = ([].concat (...this.owners.map(({pets}) => pets || []))).filter (pet => pet.type == "Cat");
      // sort the cats by name
      this.pets = this.pets.sort ((p1, p2) => p1.name == p2.name ? 0 : (p1.name < p2.name ? -1 : 1));
      this.showResults = this.pets.length > 0;
      if (isDevMode()) console.log(data);
      this.loading = false;
    }); 
  }
}
