import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCardsSectionComponent } from './article-cards-section.component';

describe('ArticleCardsSectionComponent', () => {
  let component: ArticleCardsSectionComponent;
  let fixture: ComponentFixture<ArticleCardsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCardsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleCardsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
