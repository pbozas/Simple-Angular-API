import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ProductService} from 'src/app/services/product.service';
@Component({
  selector: 'app-show-pr',
  templateUrl: './show-pr.component.html',
  styleUrls: ['./show-pr.component.css']
})
export class ShowPrComponent implements OnInit {

  constructor(private service: ProductService) { }
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
}
