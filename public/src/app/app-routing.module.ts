import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { PulseComponent } from './pulse/pulse.component';
import { FmComponent } from './fm/fm.component';
import { AmComponent } from './am/am.component';
import { FatComponent } from './fat/fat.component';
import { PwmComponent } from './pwm/pwm.component';


const routes: Routes = [
  {path: "basic", component: BasicComponent},
  {path: "pulse", component: PulseComponent},
  {path: "fm", component: FmComponent},
  {path: "am", component: AmComponent},
  {path: "fat", component: FatComponent},
  {path: "pwm", component: PwmComponent},
  {path: "", redirectTo: "basic", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
