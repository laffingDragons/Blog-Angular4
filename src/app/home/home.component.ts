import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//declare a dummy class
export class HomeComponent implements OnInit {

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

  ngOnInit() {
  }

}
