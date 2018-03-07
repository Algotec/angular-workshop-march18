import {Observable} from 'rxjs/observable';
import {fromEvent} from 'rxjs/observable/fromEvent';


const keyDown$: Observable<KeyboardEvent> = fromEvent(document, 'keydown');

keyDown$.subscribe((keyEvent) => {
  console.log(keyEvent);
});



