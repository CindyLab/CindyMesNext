import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {StartupDataComponent} from "./startup-data.component";
import {StartupRoutingModule} from "./startup-routing.module";

@NgModule({
  declarations: [StartupDataComponent],
  imports: [
    CommonModule,
    StartupRoutingModule
  ]
})

export class StartupModule {}