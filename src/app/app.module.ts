import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MapComponent} from './map/map.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [{
  path:'',
  component:LoginComponent
},
{
  path:'map',
  component:MapComponent
},
{
  path:'list',
  component:ListComponent
}
];



@NgModule({
  declarations: [
    AppComponent,ListComponent,MapComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,RouterModule.forRoot(routes),
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
