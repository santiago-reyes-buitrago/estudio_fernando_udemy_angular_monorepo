import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {SideMenu} from '@shared/components/side-menu/side-menu';

@Component({
  selector: 'admin-layout',
  imports: [
    RouterOutlet,
    SideMenu
  ],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AdminLayout {
  isAuthenticated = signal(false);

  onLogin(){
    this.isAuthenticated.set(true)
  }

  onLogout(){
    this.isAuthenticated.set(false)
  }
}
