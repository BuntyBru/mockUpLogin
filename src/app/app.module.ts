import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MapComponent} from './map/map.component';
import {ListComponent} from './list/list.component';
import {MatTableModule} from '@angular/material/table';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatPaginatorModule,MatSortModule
} from '@angular/material';


const routes: Routes = [{
  path:'',
  component:LoginComponent
},
{
  path:'map',
  component:MapComponent
}
];



@NgModule({
  declarations: [
    AppComponent,ListComponent,MapComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,RouterModule.forRoot(routes),MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,MatPaginatorModule,MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
