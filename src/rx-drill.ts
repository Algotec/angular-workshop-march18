import {Observable} from 'rxjs/observable';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {filter} from 'rxjs/operators/filter';
import {tap} from 'rxjs/operators/tap';

const keyDown$: Observable<KeyboardEvent> = fromEvent(document, 'keydown');
const img: HTMLImageElement = document.querySelector('#logo') as HTMLImageElement;
keyDown$
  .pipe(
    filter(key => key.code.includes('Arrow')),
    tap((keyEvent) => console.log(keyEvent)))
  .subscribe((keyEvent) => {
    let val = 0;
    switch (keyEvent.code) {
      case 'ArrowUp':
        val = -10;
        break;
      case 'ArrowDown':
        val = +10;
        break;
    }
    let top = parseInt(img.style.top.replace('px', ''), 10);
    if (isNaN(top)) {
      top = 0;
    }
    img.style.top = top + val + 'px';

  });



