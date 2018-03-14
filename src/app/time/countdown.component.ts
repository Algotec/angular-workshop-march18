import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {interval} from 'rxjs/observable/interval';
import {finalize, map, repeatWhen, takeWhile} from 'rxjs/operators';
import {Subject} from 'rxjs/Subject';
import {animationFrame} from 'rxjs/scheduler/animationFrame';

@Component({
  selector: 'countdown',
  template: `
    <ng-container *ngIf="inputTime">
      {{ timeLeft$ | async | date:'mm:ss'}}
    </ng-container> `
})

export class CountdownComponent implements OnChanges, OnInit {

  @Input('to') inputTime: number;
  @Output() due = new EventEmitter();
  timeLeft$: Observable<Number>;

  toValue$ = new Subject();

  ngOnInit() {
    this.startCounter();
  }

  startCounter() {
    this.timeLeft$ = interval(1000, animationFrame).pipe(
      map(() => this.inputTime - Date.now()),
      takeWhile(value => value > 0),
      finalize(() => this.due.emit()),
      repeatWhen(() => this.toValue$)
    );
  }

  ngOnChanges(changes) {
    if (changes.inputTime && !changes.inputTime.isFirstChange()) {
      this.toValue$.next();
    }
  }


}
