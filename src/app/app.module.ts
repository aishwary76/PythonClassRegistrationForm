import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticlesModule } from 'angular-particle';
import { ParticleComponent } from './particle/particle.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticleComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ParticlesModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
