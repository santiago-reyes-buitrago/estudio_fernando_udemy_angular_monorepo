import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-menu.html',
  styleUrl: './side-menu.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenu {
  isAuthenticated = input(false);
  onSignOut = output();
  onSignIn = output();
}
