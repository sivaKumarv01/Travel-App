import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/Header.component';
import { HomeComponent } from './Home/Home.component';
import { FooterComponent } from './Footer/Footer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './EmployeeDetails/EmployeeDetails.component';

@NgModule({
  declarations: [	
    AppComponent,
      HeaderComponent,
      HomeComponent,
      FooterComponent,
      EmployeeDetailsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
