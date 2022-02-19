import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VezetaCardsComponent } from './vezeta-cards/vezeta-cards.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RoutingComponent } from './routing/routing.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BtnComponent } from './btn/btn.component';
import { HttpClientModule } from '@angular/common/http';
import { EditedataComponent } from './editedata/editedata.component';
import { ModalComponent } from './modal/modal.component';
import { ShowDeleteComponent } from './show-delete/show-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    VezetaCardsComponent,
    FormComponent,
    RoutingComponent,
    SignInComponent,
    SignUpComponent,
    BtnComponent,
    EditedataComponent,
    ModalComponent,
    ShowDeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
