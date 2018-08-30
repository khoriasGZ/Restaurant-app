import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentModule } from './content/content.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing/routing.module';
import { FormAddPlatComponent } from './content/form-add-plat/form-add-plat.component';


@NgModule({
  declarations: [
    AppComponent,
    FormAddPlatComponent
  ],
  imports: [
    BrowserModule, ContentModule, HttpClientModule, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
