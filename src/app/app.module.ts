import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgAnimationsExampleComponent } from './ng-animations-example/ng-animations-example.component';
import { FlipCardExampleComponent } from './flip-card-example/flip-card-example.component';
import { FlipcardComponent } from './flip-card-example/flipcard/flipcard.component';

@NgModule({
  declarations: [
    AppComponent,
    NgAnimationsExampleComponent,
    FlipCardExampleComponent,
    FlipcardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
