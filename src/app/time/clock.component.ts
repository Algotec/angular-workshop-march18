import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {interval} from 'rxjs/observable/interval';

@Component({
  selector: 'clock',
  template: `{{clock$ | async | date:'HH:mm:ss'}}`

})

export class ClockComponent {
  clock$: Observable<Date> = interval(1000).pipe(map(() => new Date()));
}
