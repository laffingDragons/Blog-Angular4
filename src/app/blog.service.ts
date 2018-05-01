import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

  public currentBlog;

   // declare a dummy blog variable
   public allBlogs = [{
    "blogId" : "1",
    "lastModified" : "2018-04-28T18:05:42+00:00",
    "created" : "2018-02-05T18:05:42+00:00",
    "tags" : [],
    "author" : "Tom",
    "isPublished" : true,
    "views" : 0,
    "bodyHtml" : "<h2>Hello</h2>",
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
    "description" : "This is blog post 3",
    "title" : "Third Blog"
  }
]

  constructor() { }

  public getAllBlogs():any{
    return this.allBlogs;
  }

  public getCurrentBlogInformation(currentBlogId):any {
    // for of loop
    for(let blog of this.allBlogs){
        if(blog.blogId == currentBlogId){
          this.currentBlog = blog;
        }
    }
    return this.currentBlog
  }//end of get blog
}
