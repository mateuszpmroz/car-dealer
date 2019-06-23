import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {AuthGuard} from "./auth/auth.guard";
import {AdvertListingComponent} from "./advert-listing/advert-listing.component";
import {AdvertDetailsComponent} from "./advert-details/advert-details.component";

const routes: Routes = [
    {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
    {path: 'home', component: AppComponent},
    {path: 'adverts', component: AdvertListingComponent},
    { path: 'advert/:id', component: AdvertDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
