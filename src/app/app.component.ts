import {Component, DoCheck} from '@angular/core';
import {AuthService} from './userAuth/auth.service';
import {
  ButtonModel,
  ButtonType,
  ElementModelHelper,
  UIButtonOptionsModel,
  UIElementModel,
  UIElementModelHelper
} from '@algotec/wmdl-webkit';

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

  linkBtn = this.createLinkButton();


  private getLoginText(isLoggedIn: boolean) {
    return (isLoggedIn) ? 'PROFILE' : 'LOGIN';
  }

  private createLinkButton() {
    return UIElementModelHelper.createElement({
      toolID: 'linkBtn',
      type: ButtonModel.type,
      elementModel: {text: this.getLoginText(this.authService.isLoggedIn)},
      options: {
        showIcon: false,
        showText: true,
        buttonType: ButtonType.RegularButton
      }
    });
  }

  ngDoCheck() {
    const oldValue = this.linkBtn.elementModel.text;
    const newValue = this.getLoginText(this.authService.isLoggedIn);
    if (oldValue !== newValue) {
      // this.linkBtn = this.linkBtn.setIn(['elementModel', 'text'], newValue);
      // would be nice - but won't work - ElementModel is no immutable
      this.linkBtn = this.linkBtn.set('elementModel',
        ElementModelHelper.createElementModelByType(ButtonModel.type,
          {...this.linkBtn.elementModel, ...{text: newValue}}));
    }
  }

  constructor(public authService: AuthService) {

  }
}
