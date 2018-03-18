import { NgModule } from '@angular/core'
import { PetRendererComponent } from './pet-renderer.component';
import { PetListComponent } from './pet-list.component';
import { PetInputComponent } from './pet-input.component';
import { PetService } from './pet.service';
import { SharedModule } from '../shared/shared.module';
import { PetSearchPipe } from './pet-search.pipe';
import { TimeModule } from '../time/time.module';
import { PetsComponent } from './pets.component';

@NgModule({
  providers: [PetService],
  declarations: [PetsComponent, PetInputComponent, PetSearchPipe,
    PetListComponent,
    PetRendererComponent],
  imports: [SharedModule, TimeModule],
  exports: [PetsComponent],
})
export class PetsModule {
}
