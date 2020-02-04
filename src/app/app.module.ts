import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GamesComponent } from './components/games/games.component';
import { ConsolesComponent } from './components/consoles/consoles.component';
import { PublishersComponent } from './components/publishers/publishers.component';
import { HomeComponent } from './components/home/home.component';
import { ConsolesService } from './services/consoles.service';
import { PublishersService } from './services/publishers.service';
import { GamesService } from './services/games.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GamesComponent,
    ConsolesComponent,
    PublishersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ConsolesService, PublishersService, GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
