import { Routes } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
export const appRoutes: Routes = [
  {path: 'pets', component: PetsComponent},
  {path: '', redirectTo: '/pets', pathMatch: 'full'}
]
