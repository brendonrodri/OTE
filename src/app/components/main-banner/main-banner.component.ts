import { Component, HostBinding, OnInit } from '@angular/core';
import IBannerContent from '../banner-content/banner-content-interface';

@Component({
  selector: 'ote-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent {
  sliderCounter: number = 0;
  bannerContent: IBannerContent[] = [
    {
      title: 'Onde Tem Enchente: Transformando Desafios em Soluções',
      content: 'Você já sentiu o impacto das enchentes na região metropolitana? Sabemos que enfrentar as águas tumultuadas pode ser assustador e prejudicial para comunidades inteiras. Mas e se pudéssemos transformar esse problema em oportunidade?',
      backgroundImage: '../../../assets/images/enchentebg1.jpg'
    },
    {
      title: 'Um chat para dar voz à população',
      content: 'Com o Onde Tem Enchente, você pode fazer denúncias sobre a situação de seu bairro de forma rápida e eficiente. Mantemos um histórico detalhado das enchentes, permitindo um acompanhamento preciso da situação e uma resposta ágil às necessidades das comunidades afetadas.',
      backgroundImage: '../../../assets/images/enchentebg2.png'
    }
  ];

  prevSlide(): number{
    if(this.sliderCounter > 0){
      this.sliderCounter -= 1;
      console.log(this.sliderCounter);
    }
    return this.sliderCounter;
  }
  nextSlide(): number{
    if(this.sliderCounter < this.bannerContent.length -1){
      this.sliderCounter += 1;
      console.log(this.sliderCounter);
    }
    return this.sliderCounter;
  }
}