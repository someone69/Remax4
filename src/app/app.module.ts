import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SearchComponent } from './components/search/search.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MaklerMesiacaComponent } from './components/makler-mesiaca/makler-mesiaca.component';
import { NehnutelnostComponent } from './components/nehnutelnost/nehnutelnost.component';
import { ProfilComponent } from './components/profil/profil.component';
import { DataService } from './services/data-service';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './components/footer/footer.component';
import { TeamEditComponent } from './components/team-edit/team-edit.component';
import { MakmesEditComponent } from './components/makmes-edit/makmes-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    SearchComponent,
    PortfolioComponent,
    MaklerMesiacaComponent,
    NehnutelnostComponent,
    ProfilComponent,
    HomeComponent,
    TeamComponent,
    FooterComponent,
    TeamEditComponent,
    MakmesEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
