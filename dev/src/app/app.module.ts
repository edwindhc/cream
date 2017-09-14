import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GuardarDatosService } from './guardar-datos.service';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TooltipModule } from "ngx-tooltip";
import { LoadingModule } from 'ngx-loading';
import { OfferComponent } from './offer/offer.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'offer', component: OfferComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    TooltipModule,
    LoadingModule,
    RouterModule.forRoot(appRoutes,{ useHash: true })
  ],
  providers: [GuardarDatosService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
