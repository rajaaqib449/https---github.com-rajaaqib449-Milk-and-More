import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productData:any[]=[];
  FinalData:any;

  constructor(private Product:ProductService) { }

  ngOnInit(): void {

    this.Product.getAllRecord().subscribe(data=>{
      console.log('The Product Data is',data)
      this.FinalData=data.productData
      console.log('The Final data is',this.FinalData)
    })
        

      



  }

}