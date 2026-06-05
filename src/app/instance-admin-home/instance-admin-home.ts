import { Component } from '@angular/core';
import { UserApproval } from '../user-approval/user-approval';
import { BreadCalendar } from '../bread-calendar/bread-calendar';

@Component({
  selector: 'app-instance-admin-home',
  imports: [UserApproval, BreadCalendar],
  templateUrl: './instance-admin-home.html',
  styleUrl: './instance-admin-home.css',
})
export class InstanceAdminHome {}
