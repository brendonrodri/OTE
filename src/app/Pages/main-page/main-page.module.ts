import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainBannerModule } from 'src/app/components/main-banner/main-banner.module';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainBannerModule
  ],
  exports: [MainPageComponent]
})
export class MainPageModule { }
