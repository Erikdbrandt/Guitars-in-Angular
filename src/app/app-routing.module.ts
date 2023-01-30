import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPage} from "./pages/login/login.page";
import {ProfilePage} from "./pages/profile/profile.page";
import {GuitarCataloguePage} from "./pages/guitar-catalogue/guitar-catalogue.page";


const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/login"
  },
  {
    path: "login",
    component: LoginPage
  },

  {
    path: "guitars",
    component: GuitarCataloguePage
  },

  {
    path: "profile",
    component: ProfilePage
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)], //import a module
  exports: [RouterModule] // expose module and its features to other modules
})

export class AppRoutingModule {

}
