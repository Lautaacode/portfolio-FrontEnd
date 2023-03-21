import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexModule } from './shared/index/index.module';
import { LoginModule } from './shared/login/login.module';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { LogoComponent } from './components/logo/logo.component';
import { BtnLoginComponent } from './components/btn-login/btn-login.component';
import { BtnLogoutComponent } from './components/btn-logout/btn-logout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SocialmediaComponent,
    LogoComponent,
    BtnLoginComponent,
    BtnLogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    LoginModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
