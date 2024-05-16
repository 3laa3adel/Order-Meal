import { Component, OnInit } from '@angular/core';
import { OrderdetailsServiceService } from '../../services/orderdetails.service.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone:true,
  imports:[FormsModule,RouterModule,RouterOutlet,CommonModule,MenuComponent ],
  providers:[OrderdetailsServiceService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderdetailsServiceService) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
