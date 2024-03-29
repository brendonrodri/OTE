import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardsSectionComponent } from './article-cards-section.component';
import { ArticleCardModule } from '../article-card/article-card.module';

@NgModule({
  declarations: [
    ArticleCardsSectionComponent
  ],
  imports: [
    CommonModule,
    ArticleCardModule
  ],
  exports: [
    ArticleCardsSectionComponent
  ],
})
export class ArticleCardsSectionModule { }
