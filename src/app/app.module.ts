import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThoughtsComponent } from './components/thoughts/thoughts.component';
import { ListThoughtsComponent } from './components/list-thoughts/list-thoughts.component';
import { ThoughtComponent } from './components/thought/thought.component';
import { DeleteThroughtComponent } from './components/delete-throught/delete-throught.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThoughtsComponent,
    ListThoughtsComponent,
    ThoughtComponent,
    DeleteThroughtComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
