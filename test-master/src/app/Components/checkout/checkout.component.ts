import { Component, OnInit } from '@angular/core';
import { SharedService} from "../../services/shared.service.client";
import { PostsService} from "../../services/postings.service.client";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
user:string;
carts:string;
  constructor(private sharedService: SharedService, private postService: PostsService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.postService.findShoppingItem('321').subscribe(
      (data:any ) =>{
        this.carts = data;
      
      }
      )
  }

}
