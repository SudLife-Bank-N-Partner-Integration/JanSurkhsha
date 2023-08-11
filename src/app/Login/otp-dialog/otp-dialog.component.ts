import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-otp-dialog',
  templateUrl: './otp-dialog.component.html',
  styleUrls: ['./otp-dialog.component.css']
})
export class OtpDialogComponent implements OnInit {
  name: string;
  constructor(private _mdr: MatDialogRef<OtpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: any){
      this.name = data.name;
  }
  ngOnInit(): void {
    
  }
  CloseDialog() {
    this._mdr.close(false)
  }

  moveToNext(event : any) {
    let next = event.target.nextElementSibling;
    if (next) {
      next.focus();
    } else {
      event.target.blur();
    }
  }
}
