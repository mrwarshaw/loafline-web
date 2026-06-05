import { Component, inject, ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LoafService } from '../loaf.service';
import { Loaf } from '../loaf';

@Component({
  selector: 'app-bread-calendar',
  imports: [DatePipe],
  templateUrl: './bread-calendar.html',
  styleUrl: './bread-calendar.css',
})
export class BreadCalendar {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  loafService = inject(LoafService);
  loaves: Loaf[] = [];

  constructor() {
    this.loafService.getLoaves().then((loaves: Loaf[]) => {
        this.loaves = loaves;
        this.changeDetectorRef.markForCheck();
    });
  }
}
