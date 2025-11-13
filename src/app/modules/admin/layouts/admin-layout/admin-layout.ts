import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SrbSideMenu, TitleColor} from 'srb-side-menu';

@Component({
  selector: 'admin-layout',
  imports: [
    RouterOutlet,
    SrbSideMenu
  ],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AdminLayout {
  color = TitleColor.red
  isAuthenticated = signal(false);

  onLogin(){
    this.isAuthenticated.set(true)
  }

  onLogout(){
    this.isAuthenticated.set(false)
  }

  protected readonly TitleColor = TitleColor;
}
