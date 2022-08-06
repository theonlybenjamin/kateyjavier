import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InvitationComponent } from './views/invitation/invitation.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotWelcomeComponent } from './views/not-welcome/not-welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    InvitationComponent,
    FooterComponent,
    NotWelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
