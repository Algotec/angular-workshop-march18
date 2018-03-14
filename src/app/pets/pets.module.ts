import {NgModule} from '@angular/core'
import {PetRendererComponent} from './pet-renderer.component';
import {PetListComponent} from './pet-list.component';
import {PetInputComponent} from './pet-input.component';
import {PetService} from './pet.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  providers: [PetService],
  declarations: [PetInputComponent,
    PetListComponent,
    PetRendererComponent],
  imports: [SharedModule],
  exports: [PetListComponent,PetInputComponent],
})
export class PetsModule {
}
