import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SearchIssuesComponent } from './search-issues/search-issues.component';

import { SearchIssuesService } from './search-issues.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchIssuesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [SearchIssuesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
