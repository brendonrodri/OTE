import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainBannerModule } from 'src/app/components/main-banner/main-banner.module';
import { ArticleCardModule } from 'src/app/components/article-card/article-card.module';
import { ArticleCardsSectionModule } from 'src/app/components/article-cards-section/article-cards-section.module';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainBannerModule,
    ArticleCardsSectionModule
  ],
  exports: [MainPageComponent]
})
export class MainPageModule { }
