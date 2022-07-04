import { Component, OnInit } from '@angular/core';







@Component({
  selector: 'app-new-service-template',
  templateUrl: './new-service-template.component.html',
  styleUrls: ['./new-service-template.component.scss']
})
export class NewServiceTemplateComponent implements OnInit {

  constructor() { }


  selectedCategory: any = null;
  selectedOsTrailCategory:any = null;

  categories: any[] = [{name: 'Global', key: 'A'}, {name: 'Interface', key: 'M'}];

  osTrailCategories:any[] = [{name: '12.X', desc:'0 out of 12 devices belong to this category', key: 'A'}, {name: '15.X & 3.X', desc:'12 out of 12 devices belong to this category', key: 'B'}, {name: '16.X', desc:'0 out of 12 devices belong to this category', key: 'C'}, {name: '17.X', desc:'0 out of 12 devices belong to this category', key: 'D'}]

  ngOnInit() {
      this.selectedCategory = this.categories[1];
      this.selectedOsTrailCategory = this.osTrailCategories[1];
  }

}
