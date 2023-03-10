import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPage} from "./pages/login/login.page";
import {ProfilePage} from "./pages/profile/profile.page";
import {GuitarCataloguePage} from "./pages/guitar-catalogue/guitar-catalogue.page";
import {AuthGuard} from "./guards/auth.guard";


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
    component: GuitarCataloguePage,
    canActivate: [AuthGuard]
  },

  {
    path: "profile",
    component: ProfilePage,
    canActivate: [AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)], //import a module
  exports: [RouterModule] // expose module and its features to other modules
})

export class AppRoutingModule {

}
