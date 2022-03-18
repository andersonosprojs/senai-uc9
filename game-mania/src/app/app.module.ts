import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule } from '@angular/forms';
import { HomeHeaderComponent } from './views/home-header/home-header.component';
import { HomeBannerComponent } from './views/home-banner/home-banner.component';
import { HomeFooterComponent } from './views/home-footer/home-footer.component';
import { HomePromocoesComponent } from './views/home-promocoes/home-promocoes.component';
import { HomeComentariosComponent } from './views/home-comentarios/home-comentarios.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeBannerComponent,
    HomeFooterComponent,
    HomePromocoesComponent,
    HomeComentariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
