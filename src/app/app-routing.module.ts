import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { CreateDialogeComponent } from './home/create-dialoge/create-dialoge.component';
import { AffairComponent } from './home/affair/affair.component';
import { AffairsList } from './home/affair/affair-list.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'post/affair', component: CreateDialogeComponent },
      { path: 'affair/:from/:to', component: AffairComponent,resolve:{affairs:AffairsList}},
      { path: '**', redirectTo: '' }
    ]
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
