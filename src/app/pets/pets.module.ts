import {NgModule} from '@angular/core';
import {PetRendererComponent} from './pet-renderer.component';
import {PetListComponent} from './pet-list.component';
import {PetInputComponent} from './pet-input.component';
import {PetService} from './pet.service';
import {SharedModule} from '../shared/shared.module';
import {PetSearchPipe} from './pet-search.pipe';
import {TimeModule} from '../time/time.module';
import {PetsComponent} from './pets.component';
import {PetDetailsComponent} from './pet-details.component';
import {RouterModule, Routes} from '@angular/router';

export const petRoutes: Routes = [
  {
    path: 'pets', component: PetsComponent, children: [
      {path: '', component: PetListComponent},
      {path: ':id', component: PetDetailsComponent}
    ]
  }
];

@NgModule({
  providers: [PetService],
  declarations: [PetsComponent, PetInputComponent, PetSearchPipe,
    PetListComponent,
    PetRendererComponent, PetDetailsComponent],
  imports: [SharedModule, TimeModule, RouterModule.forChild(petRoutes)],
  exports: [PetsComponent],
})
export class PetsModule {
}
