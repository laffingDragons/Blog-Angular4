import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//declare a dummy class
export class HomeComponent implements OnInit {

  public allBlogs=[];
 
  constructor(public blogHttpService:BlogHttpService) {  }

  ngOnInit() {
    this.allBlogs = this.blogHttpService.getAllBlogs().subcribe(
      data =>{
      this.allBlogs = data["data"];
      console.log(">>>>",this.allBlogs)
      },
      error =>{
        console.log("Some error occured",error.errorMessage);
      }
    )
  }

}
