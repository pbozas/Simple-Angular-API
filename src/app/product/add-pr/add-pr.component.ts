import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-pr',
  templateUrl: './add-pr.component.html',
  styleUrls: ['./add-pr.component.css']
})
export class AddPrComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddPrComponent>) { }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogbox.close();
  }
}


