import { Component, OnInit } from '@angular/core';
// importing route related code
import { ActivatedRoute , Router } from "@angular/router";

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {

  // Emppty object
  public currentBlog;
  // declare a dummy blog variable
  public allBlogs = [{
    "blogId" : "1",
    "lastModified" : "2018-04-28T18:05:42+00:00",
    "created" : "2018-02-05T18:05:42+00:00",
    "tags" : ["some", "random", "tags"],
    "author" : "Tom",
    "isPublished" : true,
    "views" : 0,
    "bodyHtml" : "<h2>Hello</h2>",
    "category" : "Comedy",
    "description" : "This is blog post 1",
    "title" : "First Blog"
  },
  {
    "blogId" : "2",
    "lastModified" : "2018-04-25T18:05:42+00:00",
    "created" : "2018-02-09T18:05:42+00:00",
    "tags" : [],
    "author" : "Steve",
    "isPublished" : true,
    "views" : 0,
    "bodyHtml" : "<h2>Sukriya</h2>",
    "category" : "Education",
    "description" : "This is blog post 2",
    "title" : "Second Blog"
  },
  {
    "blogId" : "3",
    "lastModified" : "2018-03-28T18:05:42+00:00",
    "created" : "2018-03-05T18:05:42+00:00",
    "tags" : [],
    "author" : "Tonny",
    "isPublished" : true,
    "views" : 0,
    "bodyHtml" : "<h2>Welcome</h2>",
    "category" : "Food",
    "description" : "This is blog post 3",
    "title" : "Third Blog"
  }
]

  constructor( private _route:ActivatedRoute, private router:Router ) { }

  ngOnInit() {
    // getting blogId from the route
    let myBlogId = this._route.snapshot.paramMap.get('blogId')
    console.log("myBlogId = ", myBlogId);

    //calling the method
    this.getCurrentBlogInformation(myBlogId);
  }

  public getCurrentBlogInformation(currentBlogId):any {
    // for of loop
    for(let blog of this.allBlogs){
        if(blog.blogId == currentBlogId){
          this.currentBlog = blog;
        }
    }
  }//end of get blog

}
