import { Injectable, inject } from '@angular/core';
import { InstanceService } from './instance.service';

@Injectable({
  providedIn: 'root',
})
export class LoafService {
  instanceService = inject(InstanceService);
  private readonly instance = this.instanceService.getRequestedInstance();
  private url = `http://localhost:3000/${this.instance}-loaves`;

  async getLoaves() {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
