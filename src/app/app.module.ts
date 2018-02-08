import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormControl,FormGroup} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PuzzleComponent } from './puzzle/puzzle.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'puzzle', component: PuzzleComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PuzzleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
