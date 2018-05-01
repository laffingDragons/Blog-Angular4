import { Injectable } from '@angular/core';
// importing http and client to make request
import{ HttpClient, HttpErrorResponse } from '@angular/common/http'
// import observeable related code
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'

@Injectable()
export class BlogHttpService {

  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs'
  public authToken = 'MzI1Zjg1YzliNjMwMGMyMDg4YmYwMWQ2MGU5NGI0NTVmNmRmOGNmYmM2YzFkZTg2ZmFjYWM5YjBiYjQyYjkxZDM4ZDUxODNmZTNjZTBkNGJhMDVhNGZiMDA2N2ZmMGNkYzQ3MWY3MmQzOWFlNGM0ZTFhOTVkYTA3ZDMyMDU3YzVhYWJj'
  constructor( private _http:HttpClient) {
    console.log("constructor of blogservice was called");
   }

  // exception error handler
  private handleError(err: HttpErrorResponse){
    console.log("Handle error Http Calls");
    console.log(err.message);
    return Observable.throw(err.message);   
  }


  public getAllBlogs():any{
    let myResponse =  this._http.get(`${this.baseUrl}/all?authToken=${this.authToken}`);
    console.log(myResponse)
    return myResponse;
  }

  public getCurrentBlogInformation(currentBlogId):any {
    // for of loop
    let myResponse = this._http.get(`${this.baseUrl}/view/${currentBlogId}/all?authToken=${this.authToken}`)
    console.log(myResponse)
    return myResponse;
  }//end of get blog
}
