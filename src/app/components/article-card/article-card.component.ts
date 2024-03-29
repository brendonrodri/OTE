import { Component, Input, OnInit } from '@angular/core';
import { IArticleCardContent } from './models/article-card.model';

@Component({
  selector: 'ote-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent {
  @Input() articleContent!: IArticleCardContent;
}
