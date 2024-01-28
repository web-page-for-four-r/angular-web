import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubHeadingComponent } from './components/sub-heading/sub-heading.component';






@NgModule({
  declarations: [
    NavHeaderComponent, 
    FooterComponent, 
    SubHeadingComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavHeaderComponent, 
    FooterComponent, 
    SubHeadingComponent]
})
export class SharedModule { }
