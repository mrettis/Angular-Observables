import { Component, OnInit, OnDestroy } from '@angular/core';
import {  Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
  //  this.firstObsSubscription =  interval(1000).subscribe(count =>{
  //     console.log(count)
  //   })
  
  const customIntervalObservable = Observable.create((observer: { next: (arg0: number) => void; }) => {
    let count = 0;
    setInterval( ()=>{

      observer.next(count);
      count++;
    }, 1000);
  });
   this.firstObsSubscription =  customIntervalObservable.subscribe((data: any) =>{
      console.log(data)
    })
  }

  ngOnDestroy(){
    this.firstObsSubscription.unsubscribe();
  }

}
