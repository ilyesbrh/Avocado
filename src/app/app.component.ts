import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { DatabaseApiService } from './database-api.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class AppComponent implements OnInit {
  
  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer,private dbService:DatabaseApiService) {
    this.iniIcons();
  }
  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.dbService.setup();
  }
  iniIcons() {
    this.matIconRegistry.addSvgIcon(
      `menuu`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/menu.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `powerr`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/power.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `settingg`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/setting.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `favoritee`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/round-favorite.svg")
    );
    this.matIconRegistry.addSvgIcon(
      `juge-hammer`,
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/juge-hammer.svg")
    );
  }
}
