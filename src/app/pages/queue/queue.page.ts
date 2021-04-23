import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.scss'],
})
export class QueuePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
}
