import {Component} from '@angular/core';
import {PetService} from './pet.service';
import {PetModel} from './pet.model';
import {FormEventType, IFormInteractionEvent} from '@algotec/wmdl-webkit';
import {addTextBoxID} from './pets.reducer';

@Component({
  selector: 'pet-input',
  styles: [`
    :host {
      display: flex;
      height: 50px;
    }

    ::ng-deep alg-textbox {
    / / not so simple . this does not work will need a much more complicated selector color: white;
    }

    alg-button {
      margin-left: 10px;
    }

    ::ng-deep alg-button .buttonElement.buttonHeight-S.regularButton {
      height: 30px;
    }
  `],
  template: `
    <ng-container [producer]="producer">
      <alg-textbox [uiElementModel]="textbox$|async" *toolID="let textbox$ of addTextBoxID"
                   (interaction)="onTextBoxChange($event)"></alg-textbox>
      <alg-button [uiElementModel]="button$|async" *toolID="let button$ of 'pets.addButton'" (click)="addPet()"></alg-button>
    </ng-container>
  `
})
export class PetInputComponent {
  addTextBoxID: string = addTextBoxID;

  petModel = new PetModel('');
  producer = this.petService.createSubTreeProducer('add'); // just to demo we can optimize by starting from higher up the tree

  constructor(public petService: PetService) {

  }

  onTextBoxChange($event: IFormInteractionEvent) {
    if ($event.type === 'change') { // really this should be an Enum.. would be improved
      this.petService.updateTextBoxValue(addTextBoxID, $event.value);
    }
  }

  addPet() {
    // really such logic should be dealt with in services - not in component.
    const addTextBoxModel = this.petService.getElementModel(addTextBoxID);
    if (addTextBoxModel) {
      this.petModel.name = addTextBoxModel.value;
      this.petService.addPet(this.petModel);
      this.petModel = new PetModel();
    } else {
      // error handling omitted, its a demo...;
    }
  }

}
