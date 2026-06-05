import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-approval',
  imports: [],
  templateUrl: './user-approval.html',
  styleUrl: './user-approval.css',
})
export class UserApproval {
  unapprovedUsers: User[] = [];
  userService = inject(UserService);
  private readonly changeDetectorRef = inject(ChangeDetectorRef);

  constructor() {
    this.userService.getUnapprovedUsers().then((users: User[]) => {
        this.unapprovedUsers = users;
        this.changeDetectorRef.markForCheck();
    });
  }

  approveUser(user: User) {
    this.userService.updateUser({ ...user, approved: true, rejected: false, actionedAt: new Date() });
    this.unapprovedUsers = this.unapprovedUsers.filter(u => u.id !== user.id);
  }

  rejectUser(user: User) {
    this.userService.updateUser({ ...user, approved: false, rejected: true, actionedAt: new Date() });
    this.unapprovedUsers = this.unapprovedUsers.filter(u => u.id !== user.id);
  }
}
