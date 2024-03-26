import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerContentComponent } from './banner-content.component';



@NgModule({
  declarations: [
    BannerContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BannerContentComponent]
})
export class BannerContentModule { }
