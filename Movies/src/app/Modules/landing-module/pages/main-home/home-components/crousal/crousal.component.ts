import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import{CrousalService} from '../../../../../../Services/crousal.service'
import { ICrousal } from '../../../../../../Interface/CrousalModel';
@Component({
  selector: 'app-crousal',
  templateUrl: './crousal.component.html',
  styleUrls: ['./crousal.component.css']
})
export class CrousalComponent implements OnInit {

  crousalData:any[]=[];
  getAllRecord:any;
  getAllData:any;


  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin:-20,
    navText: [''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
    
  }
  // slide=[
  //   {

  //     name:"Milk and More",
  //     paragrhap:"FRESH. LOCAL. DELIVERD"
  //   },
  // ]

  

  constructor(private _coursalService:CrousalService) { }

  ngOnInit(): void {
    

    this._coursalService.getAllRecord().subscribe(data=>{

      console.log(`data of coursal ${data.coursaldata}`)
      this.getAllData=data.coursaldata;
      console.log('data' ,this.getAllData)
        
    })

  }

}
