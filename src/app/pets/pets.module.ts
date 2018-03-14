import {NgModule} from '@angular/core'
import {PetRendererComponent} from './pet-renderer.component';
import {PetListComponent} from './pet-list.component';
import {PetInputComponent} from './pet-input.component';
import {PetService} from './pet.service';
import { SharedModule } from '../shared/shared.module';
import { PetSearchPipe } from './pet-search.pipe';
import { TimeModule } from '../time/time.module';

@NgModule({
  providers: [PetService],
  declarations: [PetInputComponent,PetSearchPipe,
    PetListComponent,
    PetRendererComponent],
  imports: [SharedModule,TimeModule],
  exports: [PetListComponent,PetInputComponent],
})
export class PetsModule {
}
