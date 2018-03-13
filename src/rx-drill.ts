import {Observable} from 'rxjs/observable';

const obs1 = Observable.create(function (observer) {
  // can setup the data source here
  // then can call next/error/completed on the observer here
  console.log('creation');
  const listener = function (event) {
    observer.next(event);
  };
  document.addEventListener('keydown', listener);
  return function () {
// can do any teardown logic here
    document.removeEventListener('keydown', listener);
  };
});

