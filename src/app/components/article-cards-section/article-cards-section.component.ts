import { Component, OnInit } from '@angular/core';
import { IArticleCardContent } from '../article-card/models/article-card.model';

@Component({
  selector: 'ote-article-cards-section',
  templateUrl: './article-cards-section.component.html',
  styleUrls: ['./article-cards-section.component.css']
})
export class ArticleCardsSectionComponent implements OnInit {
  
  public articleContent: IArticleCardContent[] =[
    {
      title: 'Um Chat para Dar Voz à População',
      textContent: 'Preocupado com a situação de seu bairro durante as enchentes? Nós temos a solução perfeita para você! Apresentamos nosso Chat Bot, uma ferramenta acessível e fácil de usar para reportar as condições antes, durante e depois das enchentes',
      imagePath: '../../../assets/images/image-mock.jpg'
    },
    {
      title: 'O Histórico das enchentes na Região Metropolitana',
      textContent: 'As enchentes são um fenômeno recorrente nesta região, exacerbadas por condições climáticas extremas e infraestrutura inadequada. No entanto, mesmo diante desses desafios, há espaço para a inovação e ação proativa?',
      imagePath: '../../../assets/images/image-mock.jpg'
    },
    {
      title: 'Construindo Resistência para o Futuro Previsível',
      textContent: 'À medida que as mudanças climáticas continuam a moldar o cenário ambiental, as comunidades urbanas estão se voltando para soluções inovadoras para enfrentar os desafios das enchentes previsíveis.',
      imagePath: '../../../assets/images/image-mock.jpg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
