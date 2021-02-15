import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { counterComponent } from './counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';

@NgModule({
  declarations: [AppComponent, counterComponent, HeroComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
