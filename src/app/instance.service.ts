import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InstanceService {
  getRequestedInstance() : string {
    const hostname = window.location.hostname; // e.g., "tenant1.example.com"
    const parts = hostname.split('.');

    // Handle localhost (e.g., "tenant1.localhost") or standard domains with a single TLD (.com)
    if (parts.length > 2) {
      return parts[0]; // Returns "tenant1"
    }
    
    return '';
  }
}
