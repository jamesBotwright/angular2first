import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PalmService } from './palm.service';
import { Palm } from './palm';

@Component({
  selector: 'my-palm-detail',
  templateUrl: 'app/palm-detail.component.html',
  styleUrls: ['app/palm-detail.component.css']
})
export class PalmDetailComponent implements OnInit, OnDestroy {
  palm: Palm;
  sub: any;

  constructor(
    private palmService: PalmService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      this.palmService.getPalm(id)
        .then(palm => this.palm = palm);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}
