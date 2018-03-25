import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PetModel} from './pet.model';
import {PetService} from './pet.service';

@Component({
  selector: 'pet-details',
  template: `
    <mat-card class="pet-details">
      <mat-card-header>
        <mat-card-title>
          <h1 [class.awake]="pet.awake">{{pet.name}}</h1>
        </mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <img [src]="pet.imgUrl"/>
        <div>
          <small>Time till asleep</small>
          <countdown [to]="pet.nextFeedAt" (due)="petService.toggleAwake(pet)"></countdown>
        </div>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color='accent' (click)="petService.feed(pet)">Feed</button>
        <a mat-raised-button routerLink="../">back to list</a>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`img {
    max-height: 300px;
  }`]
})
export class PetDetailsComponent implements OnInit {
  pet: PetModel;

  constructor(private activatedRoute: ActivatedRoute, public petService: PetService) {
    this.pet = this.petService.pets.find((pet) => pet.id === parseInt(this.activatedRoute.snapshot.params['id'], 10));
  }

  ngOnInit() {

  }

}
