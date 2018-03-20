import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PetModel} from './pet.model';
import {PetService} from './pet.service';

@Component({
  selector: 'pet-details',
  template: `
    <div class="pet-details">
      <h1 [class.awake]="pet.awake" class="petName">{{pet.name}}</h1>
      <img [src]="pet.imgUrl"/>
      <div>
        <small>Time till asleep</small>
        <countdown [to]="pet.nextFeedAt" (due)="petService.toggleAwake(pet)"></countdown>
      </div>
      <button (click)="petService.feed(pet)">Feed</button>
      <a routerLink="../">back to list</a>
    </div>
  `,
  styles: []
})
export class PetDetailsComponent implements OnInit {
  pet: PetModel;

  constructor(private activatedRoute: ActivatedRoute, public petService: PetService) {
    this.pet = this.petService.pets.find((pet) => pet.id === parseInt(this.activatedRoute.snapshot.params['id'], 10));
  }

  ngOnInit() {

  }

}
