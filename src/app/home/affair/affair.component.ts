import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as storeClass from 'src/Store';
import { Observable } from 'rxjs';
import { affair } from 'src/Store/model';
import { DeleteAffair } from 'src/Store/Actions/affair.Action';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-affair',
  templateUrl: './affair.component.html',
  styleUrls: ['./affair.component.css'],
  host: { 'class': 'container content bg-white shadow-lg p-0' }
})
export class AffairComponent implements OnInit {

  affairRowsCount: Observable<number>;
  affairList: Observable<affair[]>;
  public selected: string = '';
  displayType: string = 'list';
  hideInfo: boolean;
  constructor(private router: Router, private store: Store<storeClass.State>,private breakpointObserver: BreakpointObserver) {
   }

  ngOnInit() {
    this.hideInfo = this.breakpointObserver.isMatched(Breakpoints.XLarge) || this.breakpointObserver.isMatched(Breakpoints.Large);
    this.affairRowsCount = this.store.select(storeClass.getAffairsRowCount);
    this.affairList = this.store.select(storeClass.getAffairs);

    this.breakpointObserver.observe([Breakpoints.XSmall,Breakpoints.Small,Breakpoints.Medium,Breakpoints.Large,Breakpoints.XLarge]).subscribe((Action:BreakpointState)=>{
      
      if(Action.breakpoints[Breakpoints.Large] || Action.breakpoints[Breakpoints.XLarge] ){
        this.hideInfo = true;
      }else{
        this.hideInfo = false;
      }

    })
    
  }

  pageEvent(pageEvent: PageEvent) {

    let index = pageEvent.pageIndex + 1;
    let size = pageEvent.pageSize;
    let current = size * index;
    this.router.navigate(['/home/affair/' + (current - size) + '/' + size]);

  }
  delete(item: affair, index: number) {
    this.store.dispatch(new DeleteAffair([item, index]));
  }
  reverseIcon() {
    if (this.displayType == 'grid_on')
      this.displayType = 'list';
      else
      this.displayType = 'grid_on';
  }
}
