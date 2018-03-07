import {Observable} from 'rxjs/observable';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {filter} from 'rxjs/operators/filter';

const keyDown$: Observable<KeyboardEvent> = fromEvent(document, 'keydown');

keyDown$
  .pipe(
    filter(key => key.code.includes('Arrow')))
  .subscribe((keyEvent) => {
    console.log(keyEvent);
  });



