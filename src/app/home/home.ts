import { Component, inject } from '@angular/core';
import { InstanceAdminHome } from '../instance-admin-home/instance-admin-home';
import { UserHome } from '../user-home/user-home';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  imports: [InstanceAdminHome, UserHome],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  authService = inject(AuthService);

  constructor() {
      this.authService.authenticate();
  }
}
