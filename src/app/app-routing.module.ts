import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MessageComponent } from './message.component';

const routes: Routes = [
 { path: '', component: HomeComponent },
 { path: 'messages', component: MessageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
