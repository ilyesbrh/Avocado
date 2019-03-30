import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  attempting: boolean;

  constructor(private snackBar: MatSnackBar) { }
  ngOnInit() {
    this.attempting = false;
  }
  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
    } else {
      this.snackBar.open('Invalid credentials', null, { verticalPosition: 'top', politeness: 'polite', duration: 3000 });
    }
  }

}


