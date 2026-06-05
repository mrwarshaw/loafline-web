import { Component } from '@angular/core';
import { InstanceAdminHome } from '../instance-admin-home/instance-admin-home';

@Component({
  selector: 'app-home',
  imports: [InstanceAdminHome],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
