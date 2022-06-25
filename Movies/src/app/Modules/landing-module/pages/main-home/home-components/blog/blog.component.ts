import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/Services/blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogData:any[]=[]
  getAllBlogData:any
  constructor(private blogServie:BlogService) { }

  ngOnInit(): void {
  
    this.blogServie.getAllRecord().subscribe(data =>{
      console.log('the blog data is::',data)
      this.getAllBlogData=data.blogData
      console.table(this.getAllBlogData)
    })
    
  }

}
