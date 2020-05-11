import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ProductService} from 'src/app/services/product.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {AddPrComponent} from 'src/app/product/add-pr/add-pr.component';
@Component({
  selector: 'app-show-pr',
  templateUrl: './show-pr.component.html',
  styleUrls: ['./show-pr.component.css']
})
export class ShowPrComponent implements OnInit {

  constructor(private service: ProductService,
    private dialog:MatDialog) { }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['Options', 'ID', 'Name','Description'];
  ngOnInit(): void {
    this.refreshPrList();
  }

  refreshPrList(){
    this.service.getprList().subscribe(data=>{
      this.listData = new MatTableDataSource(data);
    });
  }

  onAdd(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "70%";
    this.dialog.open(AddPrComponent,dialogConfig);
  }
}
