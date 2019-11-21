import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { PulseComponent } from './pulse/pulse.component';
import { FmComponent } from './fm/fm.component';
import { AmComponent } from './am/am.component';
import { FatComponent } from './fat/fat.component';
import { PwmComponent } from './pwm/pwm.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    PulseComponent,
    FmComponent,
    AmComponent,
    FatComponent,
    PwmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
