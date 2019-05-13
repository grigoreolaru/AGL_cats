import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PetComponent } from './pet/pet.component';

@NgModule({
  declarations: [
    AppComponent,
    PetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    FlexLayoutModule,
    HttpClientModule,
    MaterialModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
