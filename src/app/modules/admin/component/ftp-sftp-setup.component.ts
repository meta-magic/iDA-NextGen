import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ftp-sftp-setup',
  templateUrl: './ftp-sftp-setup.component.html',
  styleUrls: ['./ftp-sftp-setup.component.scss']
})
export class FtpSftpSetupComponent implements OnInit {

  loder: boolean = false;

  form = new FormGroup({
    hostname: new FormControl(null, [Validators.required]),
    port: new FormControl(null, null),
    username: new FormControl(null, null),
    password: new FormControl(null, null),
    loactionfolder: new FormControl(null, null)
  });

  form1 = new FormGroup({
    sfhostname: new FormControl(null, [Validators.required]),
    sfport: new FormControl(null, null),
    sFusername: new FormControl(null, null),
    sfpassword: new FormControl(null, null),
    sfLoactionFolder: new FormControl(null, null)
  });
  constructor() { }

  ngOnInit(): void {
  }

  save() { }
  reset() { }

}
