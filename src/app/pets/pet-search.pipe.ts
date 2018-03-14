import {Pipe, PipeTransform} from '@angular/core';
import {PetModel} from './pet.model';

@Pipe({name: 'petSearch'})
export class PetSearchPipe implements PipeTransform {
  transform(pets: PetModel[], letter): any {
    return pets.filter((p) => p.name.toLowerCase().startsWith(letter.toLowerCase()));
  }

}
