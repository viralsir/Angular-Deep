import { Injectable } from '@angular/core';
import {Post} from '../Model/post';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService
{

  postList:Array<Post>=[];


  constructor(public httpClient:HttpClient)
  {
  }
// Observable

  getPostApi(){


    this.httpClient.get<Array<Post>>("https://jsonplaceholder.typicode.com/posts").subscribe(posts => this.postList=posts );

  }

  savePostApi(post:Post){


    this.httpClient.get<Array<Post>>("https://jsonplaceholder.typicode.com/posts").subscribe(posts => this.postList=posts );

    //this.httpClient.post("https://jsonplaceholder.typicode.com/posts",Post).



  }



}
