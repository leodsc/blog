import { Component } from '@angular/core';
import Theme from './pages/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blogpessoal';
  theme?: Theme;

  ngOnInit(): void {
    this.loadTheme();
  }

  loadTheme(): void {
    const isLocalStorageEmpty = localStorage.getItem('theme');
    if (!isLocalStorageEmpty) {
      localStorage.setItem('theme', 'light');
    }
    let themeType = localStorage.getItem('theme');
    this.theme = new Theme(themeType);
  }
}
