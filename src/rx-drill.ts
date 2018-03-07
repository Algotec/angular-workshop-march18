import {Observable} from 'rxjs/observable';
import {fromEvent} from 'rxjs/observable/fromEvent';
import 'rxjs/add/operator/filter';

const keyDown$: Observable<KeyboardEvent> = fromEvent(document, 'keydown');

keyDown$
  .filter(key => key.code.includes('Arrow'))
  .subscribe((keyEvent) => {
    console.log(keyEvent);
  });



