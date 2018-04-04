import {Component, DoCheck} from '@angular/core';
import {AuthService} from './userAuth/auth.service';
import {ButtonModel, ButtonType} from '@algotec/wmdl-webkit';
import {CommonProducer} from './shared/common.producer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = `Pets 'R' us`;
  // add a general theme via the html-element-settings-directive
  // we also added general styles in styles.css
  htmlOptions = {theme: 'light'};
  linkBtn = {
    toolID: 'linkBtn',
    type: ButtonModel.type,
    elementModel: {text: this.getLoginText(this.authService.isLoggedIn)},
    options: {
      showIcon: false,
      showText: true,
      buttonType: ButtonType.RegularButton
    }
  };


  private getLoginText(isLoggedIn: boolean) {
    return (isLoggedIn) ? 'PROFILE' : 'LOGIN';
  }

  ngDoCheck() {
    const oldValue = this.linkBtn.elementModel.text;
    const newValue = this.getLoginText(this.authService.isLoggedIn);
    if (oldValue !== newValue) {
      this.linkBtn.elementModel.text = newValue; // needed as local copy will not change!
      this.producer.updateElementModel({toolID: this.linkBtn.toolID, text: newValue}); //  atomic, inplace updates,
      // theres also batch actions
    }
  }


  constructor(public authService: AuthService, public producer: CommonProducer) {

  }
}
