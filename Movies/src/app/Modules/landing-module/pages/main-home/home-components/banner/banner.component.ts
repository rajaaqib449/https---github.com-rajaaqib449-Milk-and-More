import { Component, OnInit } from '@angular/core';
import{BannerService} from '../../../../../../Services/banner.service'
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerData:any[]=[];
  getAllData:any;

  constructor(private BannerService:BannerService) { }

  ngOnInit(): void {
    this.BannerService.getAllRecord().subscribe(data =>{
  
      console.log('banner data',data)
      this.getAllData=data.bannerData;
      console.log('data is',this.getAllData)
    })
  }

}
