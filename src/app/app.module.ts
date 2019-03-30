import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { reducers } from 'src/Store';
import { StoreModule } from '@ngrx/store';
import { angularMaterialModules } from './material.modules';
import { LoginComponent } from './login/login.component';
import { MatDatepickerModule } from '@angular/material';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AffairComponent } from './home/affair/affair.component';
import { EmptyPageComponent } from './home/empty-page/empty-page.component';
import { CreateDialogeComponent } from './home/create-dialoge/create-dialoge.component';
import { CovalentComponentModules } from './covalent.modules';
import { CommonModule } from '@angular/common';
import { NgcFloatButtonComponent } from './home/fab-element/ngc-float-button.component';
import { NgcFloatItemButtonComponent } from './home/fab-element/ngc-float-item-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    AffairComponent,
    LoginComponent,
    EmptyPageComponent,
    CreateDialogeComponent,NgcFloatButtonComponent,NgcFloatItemButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    angularMaterialModules,
    CovalentComponentModules,
    LayoutModule,
    FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  exports: [HomeComponent]
})
export class AppModule { }
