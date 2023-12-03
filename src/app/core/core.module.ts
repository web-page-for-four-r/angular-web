import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoolingComponent } from './components/cooling/cooling.component';
import { RefregerationComponent } from './components/refregeration/refregeration.component';
import { SharedModule } from 'app/shared/shared.module';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { AgmCoreModule } from '@agm/core';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HomeComponent } from './components/home/home.component';
import { AirConditioningComponent } from './components/air-conditioning/air-conditioning.component';



@NgModule({
  declarations: [
    CoolingComponent,
    AirConditioningComponent,
    RefregerationComponent,
    HomeComponent,
    ProfileComponent,
    GalleryComponent,
    HomeComponent,
    AirConditioningComponent,
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
