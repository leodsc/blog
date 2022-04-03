import { Component, Input, OnInit } from '@angular/core';
import Theme from 'src/app/pages/theme';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() theme?: any;

  constructor() {}

  ngOnInit(): void {}
}
