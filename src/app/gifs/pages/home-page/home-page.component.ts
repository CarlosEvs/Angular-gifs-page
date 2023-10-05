import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private giftsService: GifsService) {}

  get gifs () {
    return this.giftsService.gifsList;
  }
}
