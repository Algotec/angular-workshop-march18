import {Component} from '@angular/core';
import {AuthService} from './userAuth/auth.service';
import {ButtonModel, ButtonType, UIButtonOptionsModel, UIElementModel} from '@algotec/wmdl-webkit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Pets 'R' us`;
  // add a general theme via the html-element-settings-directive
  // we also added general styles in styles.css
  htmlOptions = {theme: 'light'};

  linkBtn: UIElementModel<ButtonModel, UIButtonOptionsModel> = new UIElementModel({
    toolID: 'linkBtn',
    elementModel: new ButtonModel('linkBtn', {text: this.authService.isLoggedIn ? 'PROFILE' : 'LOGIN'}),
    options: new UIButtonOptionsModel({
      showIcon: false,
      showText: true,
      buttonType: ButtonType.RegularButton
    })
  });

  constructor(public authService: AuthService) {

  }
}
