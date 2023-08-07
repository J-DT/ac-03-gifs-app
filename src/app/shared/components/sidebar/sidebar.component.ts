import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsService} from "../../../gifs/services/gifs.service";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {
  }

  get tagHistory(): string[]{
    return this.gifsService.tagsHistory;
  }

  searchTag(tag: string):void{

    console.log(tag);
    this.gifsService.searchTag(tag);

  }


}
