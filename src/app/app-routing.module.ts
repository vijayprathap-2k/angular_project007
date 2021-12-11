import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParafontComponent } from './parafont/parafont.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{path:'welcome',component:WelcomeComponent},{path:'parafont',component:ParafontComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
