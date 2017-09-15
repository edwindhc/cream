import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GuardarDatosService } from './guardar-datos.service';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoadingModule, ANIMATION_TYPES  } from 'ngx-loading';
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
    LoadingModule.forRoot({
        animationType: ANIMATION_TYPES.wanderingCubes,
        backdropBackgroundColour: 'rgba(0,0,0,0.1)',
        backdropBorderRadius: '4px',
        primaryColour: '#ffffff',
        secondaryColour: '#ffffff',
        tertiaryColour: '#ffffff'
    }),
    RouterModule.forRoot(appRoutes,{ useHash: true })
  ],
  providers: [GuardarDatosService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
