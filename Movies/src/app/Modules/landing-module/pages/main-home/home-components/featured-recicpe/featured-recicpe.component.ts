import { Component, OnInit } from '@angular/core';
import { FeaturedService } from 'src/app/Services/featured.service';
@Component({
  selector: 'app-featured-recicpe',
  templateUrl: './featured-recicpe.component.html',
  styleUrls: ['./featured-recicpe.component.css']
})
export class FeaturedRecicpeComponent implements OnInit {
  FeaturedData:any[]=[]
  getalldata:any
  constructor( private Featuredservices:FeaturedService) { }

  ngOnInit(): void {

    this.Featuredservices.getAllRecord().subscribe(data=>{
      console.log('The Featured data is',data)
      this.getalldata=data.FeaturedData
      console.log('the final data is featured',this.getalldata)
    })
  }

}
