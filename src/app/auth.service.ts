import { Injectable, signal, inject } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authenticated = signal(false);
  authenticatedUser = signal<User | null>(null);
  userService = inject(UserService);

  isAuthenticated() : boolean {
    return this.authenticated();
  }

  isInstanceAdmin() : boolean {
    return this.authenticatedUser()?.isInstanceAdmin ?? false;
  }

  isGlobalAdmin() : boolean {
    return this.authenticatedUser()?.isGlobalAdmin ?? false;
  }

  isRegistered() : boolean {
    return this.authenticatedUser()?.approved ?? false;
  }

  authenticate() {
      this.authenticated.set(true);
      this.userService.getUserByEmail('thewarshaw@gmail.com').then(user => {
          this.authenticatedUser.set(user);
      });
  }
}
