import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Palm } from './palm';
import { PalmService } from './palm.service';

@Component({
   selector: 'my-dashboard',
   templateUrl: 'app/dashboard.component.html',
   styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  palms: Palm[] = [];

  constructor(
    private router: Router,
    private palmService: PalmService) {
  }

  ngOnInit() {
    this.palmService.getPalms()
       .then(palms => this.palms = palms.slice(1, 5));
  }

  gotoDetail(palm: Palm) { 
    let link = ['/detail', palm.id];
    this.router.navigate(link);
  }

}

