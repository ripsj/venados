import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponentComponent } from './main-component/main-component.component';
import {DemoMaterialModule} from './material-module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalJugadorComponent } from './modal-jugador/modal-jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    ModalJugadorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalJugadorComponent]
})
export class AppModule { }
