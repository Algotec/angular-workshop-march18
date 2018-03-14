import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ClockComponent} from './clock.component';
import {CountdownComponent} from './countdown.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ClockComponent, CountdownComponent],
  exports: [ClockComponent, CountdownComponent]
})
export class TimeModule {
}
