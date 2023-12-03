import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { RefregerationComponent } from './core/components/refregeration/refregeration.component';
import { CoolingComponent } from './core/components/cooling/cooling.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { GalleryComponent } from './core/components/gallery/gallery.component';
import { HomeComponent } from './core/components/home/home.component';
import { AirConditioningComponent } from './core/components/air-conditioning/air-conditioning.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'air-conditioning', component: AirConditioningComponent },
    { path: 'refrigeration', component: RefregerationComponent },
    { path: 'cooling', component: CoolingComponent },
    { path: 'contactus', component: ProfileComponent },
    { path: 'home', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: '*', redirectTo: 'home' }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
