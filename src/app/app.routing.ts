import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './core/components/landing/landing.component';
import { RefregerationComponent } from './core/components/refregeration/refregeration.component';
import { CoolingComponent } from './core/components/cooling/cooling.component';
import { AirConditioningComponent } from './core/components/air-conditioning/air-conditioning.component';
import { ProfileComponent } from './core/components/profile/profile.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'air-conditioning', component: LandingComponent },
    { path: 'refrigeration', component: RefregerationComponent },
    { path: 'cooling', component: CoolingComponent },
    { path: 'contactus', component: ProfileComponent },
    { path: 'home', component: AirConditioningComponent },
    { path: '*', redirectTo: 'home' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
