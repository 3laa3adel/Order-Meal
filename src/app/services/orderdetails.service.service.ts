import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsServiceService {

  constructor() { }
  // fooddetails 
  
  foodDetails = [
    {
      id: 1,
      foodName: "Margherita Pizza",
      foodDetails: "Classic pizza with fresh tomatoes, mozzarella cheese, and basil.",
      foodPrice: 8.99,
      foodImg: "assets/img/marp.jpg"
    },
    
    {
      id: 2,
      foodName: "Cheeseburger",
      foodDetails: "Juicy beef burger with cheddar cheese, lettuce, tomato, and onion.",
      foodPrice: 6.49,
      foodImg: "assets/img/Cheeseburger.jpg"
    },
    {
      id: 3,
      foodName: "Caesar Salad",
      foodDetails: "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan cheese.",
      foodPrice: 5.99,
      foodImg: "assets/img/Caesar Salad.jpg"
    },
    {
      id: 4,
      foodName: "Spaghetti Carbonara",
      foodDetails: "Spaghetti pasta with creamy carbonara sauce, pancetta, and Parmesan cheese.",
      foodPrice: 10.99,
      foodImg: "assets/img/Spaghetti Carbonara.jpg"
    },
    {
      id: 5,
      foodName: "Grilled Chicken Sandwich",
      foodDetails: "Grilled chicken breast with lettuce, tomato, and mayo on a toasted bun.",
      foodPrice: 7.49,
      foodImg: "assets/img/Grilled Chicken Sandwich.jpg"
    },
    {
      id: 6,
      foodName: "Chocolate Cake",
      foodDetails: "Rich chocolate cake with layers of chocolate frosting.",
      foodPrice: 4.99,
      foodImg: "assets/img/Chocolate Cake.jpg"
    },
    {
      id: 7,
      foodName: "Grilled Cheese",
      foodDetails: "Grilled Cheese breast with lettuce, and mayo on a toasted bun.",
      foodPrice: 10.91,
      foodImg: "assets/img/Grilled Sandwich.jpg"
    },
    {
      id: 8,
      foodName: "Cream Cake",
      foodDetails: "Rich cream cake with layers of cream frosting.",
      foodPrice: 3.99,
      foodImg: "assets/img/Cream Cake.jpg"
    },
    {
      id: 9,
      foodName: "Seafood Pizza",
      foodDetails: "Classic pizza with fresh tomatoes,Seafood ,mozzarella cheese, and basil.",
      foodPrice: 10.99,
      foodImg: "assets/img/seafood.jpg"
    },
  ]


  
}
