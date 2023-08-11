import { Component,OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OtpDialogComponent } from '../otp-dialog/otp-dialog.component';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  matDialogRef!: MatDialogRef<OtpDialogComponent>;
  name: string = "";
  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.name = 'Avadhut'
  }

  OpenModal() {
    this.matDialogRef = this.matDialog.open(OtpDialogComponent, {
      data: { name: this.name },
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      if ((res == true)) {
        this.name = "";
      }
    });
  }

}
