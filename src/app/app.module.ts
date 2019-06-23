import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {
    MatSelectModule,
    MatIconModule,
    MatOptionModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatListModule, MatButtonModule, MatGridListModule, MatSnackBarModule, MatMenuModule, MatToolbarModule, MatTabsModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from "./auth/auth.guard";
import { AdvertListingComponent } from './advert-listing/advert-listing.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        MenuComponent,
        LoginComponent,
        AdvertListingComponent,
        AdvertDetailsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatIconModule,
        HttpClientModule,
        MatCardModule,
        MatListModule,
        MatButtonModule,
        MatGridListModule,
        FormsModule,
        ReactiveFormsModule,
        MatSnackBarModule,
        MatMenuModule,
        MatToolbarModule,
        MatTabsModule
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
