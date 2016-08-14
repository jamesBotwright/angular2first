import { Injectable } from '@angular/core';
import { Palm } from './palm';
import { PALMS } from './mock-palms';

@Injectable()
export class PalmService {
   getPalms() {
       return Promise.resolve(PALMS);
   }
   getPalm(id: number) {
      return this.getPalms()
          .then(palms => palms.find(palm => palm.id === id));
   }
}
