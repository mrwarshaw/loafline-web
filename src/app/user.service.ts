import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:3000/users';
  
  async getUnapprovedUsers() : Promise<User[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
