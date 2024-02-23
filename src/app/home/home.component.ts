import {Component, OnDestroy, OnInit} from '@angular/core';

import {interval, Subscription, Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    customIntervalObservable.pipe();
    this.firstObsSubscription = customIntervalObservable.pipe(map(data => {
      return 'Round: ' + data;
    })).subscribe((data) => {
      console.log(data);
    })
    /*this.firstObsSubscription = interval(1000).subscribe((count) => {
        console.log('count...', count);
    });*/
    // this.firstObsSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });
    /*const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!!!'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Completed!');
    });*/
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
