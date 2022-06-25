import { Component, OnInit } from '@angular/core';
import { FreshMilkService } from 'src/app/Services/fresh-milk.service';


@Component({
  selector: 'app-fresh-milk',
  templateUrl: './fresh-milk.component.html',
  styleUrls: ['./fresh-milk.component.css']
})
export class FreshMilkComponent implements OnInit {
  freshMilk:any[]=[];
freshMilklist:any
  constructor(private FreshMilkServices:FreshMilkService ) { }

  ngOnInit(): void {
     
    this.FreshMilkServices.getAllRecord().subscribe(data=>{
    
      console.log('banner data',data)
      this.freshMilklist=data.freshMilk;
      console.log('Fresh Milk data is',this.freshMilklist)


      
   
    })

  }

}
