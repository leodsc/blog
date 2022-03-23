import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  @ViewChild('circle') circle: any;
  @ViewChild('slider') slider: any;
  theme: string = 'light';

  constructor() {}

  ngOnInit(): void {}

  changeTheme(): void {
    this.circle.nativeElement.classList.toggle('circle__move');
    this.slider.nativeElement.classList.toggle('dark-theme');
  }
}
