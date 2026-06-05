import { Injectable, inject } from '@angular/core';
import { User } from './user';
import { InstanceService } from './instance.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {  
  instanceService = inject(InstanceService);
  private readonly instance = this.instanceService.getRequestedInstance();
  private url = `http://localhost:3000/${this.instance}-users`;
  
  async getUnapprovedUsers() : Promise<User[]> {
    const data = await fetch(this.url + '?approved=false&rejected=false');
    return (await data.json()) ?? [];
  }

  async updateUser(user: User) {
    await fetch(`${this.url}/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
  }
}
