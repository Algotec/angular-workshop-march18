import {Observable} from 'rxjs/observable';

const obs1 = Observable.create(function (observer) {
  // can setup the data source here
  // then can call next/error/completed on the observer here

  return function () {
// can do any teardown logic here
  };
});

