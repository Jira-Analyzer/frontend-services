import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, HeaderComponent, NavbarComponent, AppRoutingModule ],
  declarations: [ AppComponent, HeaderComponent, NavbarComponent ],
  bootstrap:    [ ]
})
export class AppModule { }
