import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [NavHeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports: [NavHeaderComponent, FooterComponent]
})
export class SharedModule { }
