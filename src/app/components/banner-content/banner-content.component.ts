import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ote-banner-content',
  templateUrl: './banner-content.component.html',
  styleUrls: ['./banner-content.component.css']
})
export class BannerContentComponent {
  @Input() title: string = '';
  @Input() content: string = '';
}
