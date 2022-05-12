import {NgModule} from "@angular/core";
import {StartupDataComponent} from "./startup-data.component";
import {Routes, RouterModule} from '@angular/router'


const routes: Routes = [
  { path: '', component: StartupDataComponent,
    children: [
      {path:'', redirectTo: 'startup-data', pathMatch:'full'},
      {path: 'startup-data', component: StartupDataComponent}
    ]
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StartupRoutingModule {}