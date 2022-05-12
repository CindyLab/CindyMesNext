import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";


const routes: Routes = [
  {path: '', redirectTo: 'startup', pathMatch: 'full'},
  {path: 'startup', loadChildren: ()=> import('./site/startup/startup-data.modules').then(m => m.StartupModule)}
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})

export class AppRoutingModule {}