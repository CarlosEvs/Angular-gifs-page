import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';
import { SearchBoxComponent } from '../../../gifs/components/search-box/search-box.component';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor (private gifsService: GifsService){

  }
  get tags () {
    return this.gifsService.tagsHisotry;
  }

  searchTag( tag: string){
    this.gifsService.searchTag( tag );
  }
}
