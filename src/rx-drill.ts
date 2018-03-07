import {Observable} from 'rxjs/observable';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {filter} from 'rxjs/operators/filter';


const keyDown$: Observable<KeyboardEvent> = fromEvent(document, 'keydown');

filter((key: KeyboardEvent) => key.code.includes('Arrow'))(keyDown$)
  .subscribe((keyEvent) => {
    console.log(keyEvent);
  });



