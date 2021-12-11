import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DisplaytimeComponent } from './displaytime/displaytime.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { ParafontComponent } from './parafont/parafont.component';
import { MousehoverComponent } from './mousehover/mousehover.component';
import { PipedaPipe } from './pipeda.pipe';
import { DirdemoComponent } from './dirdemo/dirdemo.component';
import { CrudComponent } from './crud/crud.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DisplaytimeComponent,
    EventbindingComponent,
    ParafontComponent,
    MousehoverComponent,
    PipedaPipe,
    DirdemoComponent,
    CrudComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
