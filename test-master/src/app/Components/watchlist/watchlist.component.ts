import { Component, OnInit } from '@angular/core';
import { ShoppingService} from "../../services/shopping.service.client";
import { PostsService} from "../../services/postings.service.client";
import {Post } from '../../models/posting.model.client';
import { SharedService} from "../../services/shared.service.client";
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
counter: number;
posts:Post;
user:string;
carts:string;
  constructor(private sharedService: SharedService,private shoppingService: ShoppingService, private postService: PostsService) { }

  ngOnInit() {
    this.counter = this.shoppingService.counter
    this.sharedService.user = this.user
    
    this.postService.findShoppingItem('321').subscribe(
      (data:any ) =>{
        this.carts = data;
      
      }
      )

    this.postService.findWatchItem().subscribe(
      (data: Post) =>{
    this.posts = data;
  }

    )
}

}