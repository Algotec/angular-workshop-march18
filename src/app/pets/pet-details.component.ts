import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PetModel} from './pet.model';
import {PetService} from './pet.service';
import {map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'pet-details',
  template: `
    <mat-card class="pet-details" *ngIf="pet$|async as pet">
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
  pet$: Observable<PetModel>;

  constructor(private activatedRoute: ActivatedRoute, public petService: PetService) {
    this.pet$ = this.activatedRoute.params
      .pipe(
        map((params) => params.id),
        switchMap((id) =>
          this.petService.pets$
            .pipe(
              map((pets) => pets.find((pet) => pet.id === parseInt(id, 10))))
        )
      );

  }

  ngOnInit() {

  }

}
