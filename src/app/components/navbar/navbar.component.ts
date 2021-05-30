import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faCoffee , faUserCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //@ViewChild("burger") burgeer : ElementRef

  userCircle = faUserCircle
  constructor() { }



   


  ngOnInit(): void {
  
}


}

  

