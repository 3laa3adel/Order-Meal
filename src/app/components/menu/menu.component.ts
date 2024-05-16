import { Component, OnInit } from '@angular/core';
import { OrderdetailsServiceService } from '../../services/orderdetails.service.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  standalone:true,
  imports:[FormsModule,RouterModule,RouterOutlet,CommonModule ],
  providers:[OrderdetailsServiceService],
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderdetailsServiceService) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
