import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../database-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  attempting: boolean;

  constructor(private dbService:DatabaseApiService ) { }
  ngOnInit() {
    this.attempting = false;
  }
  login(): void {
    this.dbService.login(this.username,this.password);
  }

}


