import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { VisualizerComponent } from "./ES/visualizer/visualizer.component";
import { HeaderComponent } from "./header/header.component";

const routes : Routes = [
    {path:'', component:VisualizerComponent},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}