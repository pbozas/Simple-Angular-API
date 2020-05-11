import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-pr',
  templateUrl: './add-pr.component.html',
  styleUrls: ['./add-pr.component.css']
})
export class AddPrComponent implements OnInit {

  constructor(public dialogbox: MatDialogRef<AddPrComponent>,
    public service:ProductService) { }

  ngOnInit(): void {
    this.resetForm();
  }


  onSubmit(form:NgForm){
    this.service.addProduct(form.value).subscribe(res=>
        {
          this.resetForm(form);
          alert('Added Successfully');
        }
      )
  }
  
  resetForm(form?:NgForm){
    if(form!=null){
     form.resetForm();
    }

    this.service.formData = {
      ID:0,
      Name:'',
      Description:''
    }
  }
  onClose(){
    this.dialogbox.close();
    this.service.filter('Register Click');
  }
}


