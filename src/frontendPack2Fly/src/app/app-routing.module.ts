import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SearchFormComponent} from "./Pages/search-form/search-form.component";
import {ContactFormComponent} from "./Pages/contact-form/contact-form.component";
import {AboutusComponent} from "./Pages/aboutus/aboutus.component";
import {RecommendedpacksComponent} from "./Pages/recommendedpacks/recommendedpacks.component";
import {ToppacksComponent} from "./Pages/toppacks/toppacks.component";
import {UserIdentityComponent} from "./Pages/user-identity/user-identity.component";

const routes: Routes = [
  {path: 'search-form', component: SearchFormComponent},
  {path: 'contact-form', component: ContactFormComponent},
  {path: 'about-us', component: AboutusComponent},
  {path: 'recommended-packs', component: RecommendedpacksComponent },
  {path: 'top-packs', component: ToppacksComponent },
  {path: 'user-identify', component: UserIdentityComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
