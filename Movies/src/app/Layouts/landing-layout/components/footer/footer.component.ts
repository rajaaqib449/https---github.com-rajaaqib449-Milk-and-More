import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FooterService } from 'src/app/Services/footer.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  show=true;

  color="red"

FooterData:any[]=[]
getAllFooterData:any
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 2
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 6
    }
  },
  nav: false
}
  constructor(private footerService:FooterService) { }

  ngOnInit(): void {

    this.footerService.getAllRecord().subscribe(data=>{

      console.log('the footer daata is::',data)
      this.getAllFooterData=data.Footerdar;
      console.log('the final data is',this.getAllFooterData)

    })


  }

}
