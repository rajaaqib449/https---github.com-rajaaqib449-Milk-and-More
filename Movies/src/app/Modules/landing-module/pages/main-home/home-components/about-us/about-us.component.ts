import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../../../../../../Services/about-us.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private _aboutUs:AboutUsService) { }
  AllYearData:any[]=[]
  getAllYearData:any
  ngOnInit(): void {
    this._aboutUs.getAllRecord().subscribe(data=>{
      console.log('Api data::',data)
 
     this.getAllYearData=data.aboutUsData;
     console.log('custom data .....',this.getAllYearData)

    })
  
  }
}
