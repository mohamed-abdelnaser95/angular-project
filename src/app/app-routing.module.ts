import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditedataComponent } from './editedata/editedata.component';
import { FormComponent } from './form/form.component';
import { ShowDeleteComponent } from './show-delete/show-delete.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VezetaCardsComponent } from './vezeta-cards/vezeta-cards.component';

// const newLocal = 'form';
const routes: Routes = [
  { path: '', component: VezetaCardsComponent },
  { path: "form", component: FormComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'alldata', component: ShowDeleteComponent },
  { path: 'edite/:id', component: EditedataComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
