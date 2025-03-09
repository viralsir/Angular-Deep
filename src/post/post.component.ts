import { Component } from '@angular/core';
import {PostService} from '../Service/post.service';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent
{

  constructor(public postService:PostService) {
  }

  LoadData()
  {
    this.postService.getPostApi();
  }


}
