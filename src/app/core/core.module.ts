import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoolingComponent } from './components/cooling/cooling.component';
import { LandingComponent } from './components/landing/landing.component';
import { RefregerationComponent } from './components/refregeration/refregeration.component';
import { SharedModule } from 'app/shared/shared.module';
import { AirConditioningComponent } from './components/air-conditioning/air-conditioning.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    CoolingComponent,
    LandingComponent,
    RefregerationComponent,
    AirConditioningComponent,
    ProfileComponent,
  ],

  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    JwBootstrapSwitchNg2Module,
    AgmCoreModule.forRoot({
        apiKey: ' '
    }),
    SharedModule
],
  
})
export class CoreModule { }
