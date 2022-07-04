import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-compatibility-guid',
  templateUrl: './compatibility-guid.component.html',
  styleUrls: ['./compatibility-guid.component.scss']
})
export class CompatibilityGuidComponent implements OnInit {


  constructor(private messageService: MessageService,
    private cookiservice: CookieService, private confirmationservice: ConfirmationService, private router: Router) { }


  ngOnInit(): void {
  }

  licenseHistory:any[]=[];
  file: any;
  uploadedFiles: any[] = [];
  onUpload() {
    // for(let file of element.files) {
    // }
    this.uploadedFiles.push(this.file);
    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }


}
