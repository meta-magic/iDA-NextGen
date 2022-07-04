import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mst-device-description',
  templateUrl: './mst-device-description.component.html',
  styleUrls: ['./mst-device-description.component.scss']
})
export class MstDeviceDescriptionComponent implements OnInit {

  osTrailCategory:any=null;
  selectedCategory: any = null;
  categories: any[] = [{name: 'Global', key: 'A'}, {name: 'Interface', key: 'M'}];
  osCategories:any[] = [{name:'15.X and Below', Key: 'A'}];

  constructor() { }

  ngOnInit() {
    this.selectedCategory = this.categories[1];
    this.osTrailCategory = this.osCategories[1];
  }

}
