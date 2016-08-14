import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Palm } from './palm';
import { PalmService } from './palm.service';

@Component({
  selector: 'my-palms',
  templateUrl: 'app/palms.component.html',
  styleUrls: ['app/palms.component.css']
})

export class PalmsComponent implements OnInit {
  palms: Palm[];
  selectedPalm: Palm;

  constructor(
    private router: Router,
    private palmService: PalmService) { }
  
  getPalms() {
      this.palmService.getPalms().then(palms => this.palms = palms);
  }
  ngOnInit() {
    this.getPalms();
  }
  
  onSelect(palm: Palm) { this.selectedPalm = palm; }
  
  gotoDetail() {
    this.router.navigate(['/detail', this.selectedPalm.id]);
  }
}
