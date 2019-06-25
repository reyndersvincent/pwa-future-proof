import { PaginationComponent } from './components/pagination/pagination.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonContainer } from './containers/pokemon/pokemon.container';
import { PokeService } from './../services/pokeservice';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/loader/loader.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonContainer,
    LoaderComponent,
    PokemonComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: "BASE_API_URL", useValue: environment.baseUrl },
    PokeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }