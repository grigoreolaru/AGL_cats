import { Component, Input, OnInit } from '@angular/core';
import { Pet } from "../interfaces/Pets";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  @Input () pet: Pet;

  constructor() { }

  ngOnInit() {
  }

}
