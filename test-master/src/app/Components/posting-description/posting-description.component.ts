import { Component, OnInit } from '@angular/core';
import { SharedService} from "../../services/shared.service.client";

@Component({
  selector: 'app-posting-description',
  templateUrl: './posting-description.component.html',
  styleUrls: ['./posting-description.component.css']
})
export class postingDescriptionComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

}
