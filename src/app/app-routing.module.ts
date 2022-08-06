import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationGuard } from './guards/invitation.guard';
import { InvitationComponent } from './views/invitation/invitation.component';
import { NotWelcomeComponent } from './views/not-welcome/not-welcome.component';

const routes: Routes = [
  {
    path:'invitado',
    component: InvitationComponent,
  },
  {
    path: 'no-invitado',
    component: NotWelcomeComponent
  },
  {
    path:'**',
    redirectTo: 'invitado',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
