import {Observable} from 'rxjs/observable';
import {fromEvent} from 'rxjs/observable/fromEvent';
import {interval} from 'rxjs/observable/interval';
import {merge} from 'rxjs/observable/merge';
import {filter} from 'rxjs/operators/filter';
import {map} from 'rxjs/operators/map';
import {takeUntil} from 'rxjs/operators/takeUntil';
import {mapTo, tap, mergeMap, scan, startWith, switchMap} from 'rxjs/operators';

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



const mouseDowns$: Observable<MouseEvent> = fromEvent(img, 'mousedown');
const parentMouseMoves$: Observable<MouseEvent> = fromEvent(document, 'mousemove');
const parentMouseUps$: Observable<MouseEvent> = fromEvent(document, 'mouseup');

const drags$ = mouseDowns$.pipe(mergeMap(md => {

  // calculate offsets when mouse down

  const startX = md.clientX + window.scrollX,
    startY = md.clientY + window.scrollY,
    startLeft = parseInt((md.target as HTMLElement).style.left, 10) || 0,
    startTop = parseInt((md.target as HTMLElement).style.top, 10) || 0;


  // Calculate delta with mousemove until mouseup
  return parentMouseMoves$
    .pipe(
      map((mm: MouseEvent) => {
        mm.preventDefault();
        return {
          left: startLeft + mm.clientX - startX,
          top: startTop + mm.clientY - startY
        };
      }),
      takeUntil(parentMouseUps$));
}));


const subscription =
  drags$.subscribe(
    (e: { left: number, top: number }) => {
      img.style.left = e.left + 'px';
      img.style.top = e.top + 'px';
    });

/**
 * drill 2: make a counter that can start, stop, reset and change between quick and slow increments
 * hints, take it step by step !
 * */


const buttons = ['start', 'stop', 'reset', 'quick', 'slow'];

interface BtnObs {
  'start': Observable<MouseEvent>;
  'stop': Observable<MouseEvent>;
  'reset': Observable<MouseEvent>;
  'quick': Observable<MouseEvent>;
  'slow': Observable<MouseEvent>;
}


const btnObs: BtnObs = buttons.reduce((acc, btn) => {
  acc[btn] = fromEvent(document.getElementById(btn), 'click');
  return acc;
}, {} as BtnObs);

const output = document.getElementById('output');

const initial = 0;
const inc = (val) => val + 1;
const reset = (val) => initial;

const starters$ = merge(
  btnObs.start.pipe(mapTo(1000)), btnObs.quick.pipe(mapTo(500)), btnObs.slow.pipe(mapTo(2000)));

const timer$ = starters$.pipe(
  switchMap((v: number) => interval(v).pipe(takeUntil(btnObs.stop))));

const actions$ = merge(btnObs.reset.pipe(mapTo(reset)), timer$.pipe(mapTo(inc)));

actions$.pipe(
  scan((acc: number, val: (v: number) => number) => val(acc), initial),
  startWith(initial),
).subscribe(value => {
  output.innerText = value.toString();
});
