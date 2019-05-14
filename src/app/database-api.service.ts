import { Injectable, NgZone } from '@angular/core';
import { ElectronService } from "ngx-electron";
import { Store } from '@ngrx/store';
import { MatSnackBar } from '@angular/material';
import { State } from 'src/Store';
import { user, affair } from 'src/Store/model';
import { Router } from '@angular/router';
import { addAffair, SetAffairRowCount, setAffairs } from 'src/Store/Actions/affair.Action';

@Injectable({
  providedIn: 'root'
})
export class DatabaseApiService {


  constructor(private electron: ElectronService, private snackBar: MatSnackBar, private store: Store<State>
    , private router: Router, private ngZone: NgZone) {
    if (this.electron.isElectronApp) {
    }
    console.log("electron APP");

    this.reply();

    this.electron.ipcRenderer.on("errorHandler", (e, arg) => {
      this.errorSnackBar(arg);
    });
  }

  reply() {

    this.electron.ipcRenderer.on("reply", (e, params) => {

      let type = params[0];
      let arg = params[1];

      switch (type) {

        // affair requests
        case 'get/affair/all':
          this.handelAffais(<affair[]>arg);
          break;
        case 'get/affair':
          this.handelAffair(<affair>arg);
          break;
        case 'get/affair/rows/count':
          this.handelAffairRowsCount(arg);
          break;
        case 'post/affair':
          this.getAffair(<number>arg);
          break;
        case 'update/affair':

          break;
        case 'delete/affair':

          break;

        // user requests
        case 'get/user/all':

          break;
        case 'get/user':
          this.userSetup(<user>arg);
          break;
        case 'post/user':

          break;
        case 'update/user':

          break;
        case 'delete/user':

          break;

        default:
          console.error('instruction not matching any request header');
          this.errorSnackBar('instruction not matching any request header');
          break;
      }

    });

  }

  // outputs
  handelAffair(affairObj: affair): void {
    this.store.dispatch(new addAffair(affairObj));
  }
  handelAffais(affairsObj: affair[]): void {

    console.log(affairsObj);

    this.store.dispatch(new setAffairs(affairsObj));
  }
  handelAffairRowsCount(arg: number): any {
    console.log('count ' + arg);

    this.store.dispatch(new SetAffairRowCount(arg));
  }
  userSetup(userObj: user): any {
    console.log(userObj);
    if (userObj)
      this.ngZone.run(() => this.router.navigate(['home']));
    else
      this.errorSnackBar('modepass ou username invalid');
  }
  // Input
  login(username: string, password: string): any {

    this.electron.ipcRenderer.send('request', ['get/user', { username: username, password: password }]);
  }
  setup(): any {
    this.electron.ipcRenderer.send('request', ['get/affair/rows/count', null]);
    console.log('setup called');
  }

  createAffair(obj: affair): void {

    this.electron.ipcRenderer.send('request', ['post/affair', obj]);
  }
  getAffair(arg: number) {
    this.electron.ipcRenderer.send('request', ['get/affair', arg]);
  }
  getAffairs(offset: string, limit: string): any {
    this.electron.ipcRenderer.send('request', ['get/affair/all', { offset: offset, limit: limit }]);
  }
  /* helpers */
  private errorSnackBar(arg: string) {
    this.ngZone.run(() => this.snackBar.open(arg, null, { verticalPosition: 'top', politeness: 'polite', duration: 3000 }));

  }

}
