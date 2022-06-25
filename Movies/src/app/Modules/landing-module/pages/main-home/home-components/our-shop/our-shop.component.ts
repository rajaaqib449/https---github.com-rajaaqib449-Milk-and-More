import { Component, OnInit } from '@angular/core';
import { OurShopService } from 'src/app/Services/our-shop.service';
@Component({
  selector: 'app-our-shop',
  templateUrl: './our-shop.component.html',
  styleUrls: ['./our-shop.component.css']
})
export class OurShopComponent implements OnInit {
  ourShop:any[]=[]
  getAllData:any
  breakFastData:any[]=[]
  getAlldataBreakfast:any
  constructor(private ourShopServies:OurShopService) { }

  ngOnInit(): void {
    this.ourShopServies.getAllRecord().subscribe(data=>{
      console.log('the our shop data is::',data)
      this.getAllData=data.ourShop
      console.log('the final data is::',this.getAllData)

      this.getAlldataBreakfast=data.breakFast
      console.log('the break fast data is::',this.getAlldataBreakfast)
    })
  }

}
