import { Component, OnInit } from '@angular/core';

import{ServicesService} from '../../../../../../Services/services.service'
@Component({
  selector: 'app-servies',
  templateUrl: './servies.component.html',
  styleUrls: ['./servies.component.css']
})
export class ServiesComponent implements OnInit {
  servicesData:any[]=[];
  getAllData:any;

  constructor(private Services:ServicesService) { }

  ngOnInit(): void {
    this.Services.getAllRecord().subscribe(data=>{
      console.log('Servies data is',data)
      this.getAllData=data.servicesData
      console.log('the data is',this.getAllData)
        

      

    })

  }

}
