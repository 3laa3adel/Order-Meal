import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { OrderdetailsServiceService } from '../../services/orderdetails.service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menupage',
  standalone: true,
  templateUrl: './menupage.component.html',
  imports:[FormsModule,RouterModule,RouterOutlet,CommonModule ],
  providers:[OrderdetailsServiceService],
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderdetailsServiceService,private router:Router) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.foodDetails.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');
        
    }
    
  }
  onSubmit() {
    alert("Your order added")

    this.router.navigate(['/menu']);
  }

}
