import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = '/api/users?approved=false';
  
  async getUnapprovedUsers() : Promise<User[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
