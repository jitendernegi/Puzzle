import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PuzzleComponent } from './puzzle/puzzle.component';

const appRoutes: Routes = [
    { path: '', loadChildren: '' },
    { path: 'puzzle', component: PuzzleComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}