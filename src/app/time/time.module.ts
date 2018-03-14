import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ClockComponent } from './clock.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [ClockComponent],
  exports: [ClockComponent]
})
export class TimeModule {
}
