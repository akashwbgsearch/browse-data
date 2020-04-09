import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectCountryComponent } from './project-country.component';
import { ProjectSectorComponent  } from './project-sector.component';
import { ProjectThemeComponent } from './project-theme.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectCountryComponent,
    ProjectSectorComponent,
    ProjectThemeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
	  HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
