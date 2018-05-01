import { Component, OnInit } from '@angular/core';
// importing route related code
import { ActivatedRoute , Router } from "@angular/router";
import { BlogHttpService } from '../blog-http.service';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  // Emppty object
  public currentBlog;
  
  constructor( private _route:ActivatedRoute, private router:Router, public blogHttpService:BlogHttpService ) { }

  ngOnInit() {
    // getting blogId from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId')
    console.log("myBlogId = ", myBlogId);

    //calling the method
   this.blogHttpService.getCurrentBlogInformation(myBlogId).subscribe(
    data =>{
      this.currentBlog = data["data"]
    },
    error =>{
      console.log(error.errorMessage);
    },
     console.log(">>>",this.currentBlog)
   )
  }

 

}
