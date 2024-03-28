import { Component, HostBinding, OnInit } from '@angular/core';
import IBannerContent from '../banner-content/banner-content-interface';

@Component({
  selector: 'ote-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.css']
})
export class MainBannerComponent {
  bannerContent: IBannerContent[] = [
    {
      title: 'O problema das enchentes na região metropoliana',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, impedit delectus, vel sapiente doloribus aspernatur sunt corrupti expedita optio odio eius perspiciatis a sequi. Veniam et inventore blanditiis earum sint. Doloribus aspernatur sunt corrupti expedita optio odio eius perspiciatis a sequi '
    },
    {
      title: 'Um chat para dar voz à população',
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, impedit delectus, vel sapiente doloribus aspernatur sunt corrupti expedita optio odio eius perspiciatis a sequi. Veniam et inventore blanditiis earum sint. Doloribus aspernatur sunt corrupti expedita optio odio eius perspiciatis a sequi '
    }
  ];

  @HostBinding('class') public componentClass = 'main_banner--section';
}