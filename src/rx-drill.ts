import {Observable} from 'rxjs/observable';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {filter} from 'rxjs/operators/filter';
import {tap} from 'rxjs/operators/tap';
import {takeUntil} from 'rxjs/operators/takeUntil';

const keyDown$: Observable<KeyboardEvent> = fromEvent(document, 'keydown');
const img: HTMLImageElement = document.querySelector('#logo') as HTMLImageElement;
const reached$ = Observable.create(function (obs) {
  const ob = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio === 0) {
          obs.next();
        }
      });
    }
  );
  ob.observe(img);
  return function () {
    ob.disconnect();
  };
});

keyDown$
  .pipe(
    filter(key => key.code.includes('Arrow')),
    tap((keyEvent) => console.log(keyEvent)),
    takeUntil(reached$))
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




/** drill 1: make the angular logo draggable - hint - use mousedown->mousemove until mouseup
 * */

