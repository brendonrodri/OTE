import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBannerComponent } from './main-banner.component';
import { BannerContentModule } from '../banner-content/banner-content.module';

@NgModule({
  declarations: [MainBannerComponent],
  imports: [
    CommonModule,
    BannerContentModule
  ],
  exports: [MainBannerComponent]
})
export class MainBannerModule { }
