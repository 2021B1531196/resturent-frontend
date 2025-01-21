import React from 'react'
import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpeg";
import dish9 from "../assets/dish9.jpeg";
import dish10 from "../assets/dish10.jpeg";
import Dishcard from './Dishcard';
import "../components/Menu.css"


function Menu() {


    const DISHES = [
        {
          image: dish1,
          title: "Spaghetti Carbonara",
          description: "Creamy pasta with bacon and cheese",
          price:"~ 149",
        },
        {
          image: dish2,
          title: "Chicken Tikka Masala",
          description: "Indian curry with tender chicken in spicy sauce",
          price:"~ 299",
        },
        {
          image: dish3,
          title: "Caprese Salad",
          description: "Fresh tomatoes, mozzarella, and basil with balsamic glaze",
          price:"~ 251",
        },
        {
          image: dish4,
          title: "Sushi Roll",
          description: "Assorted seafood and vegetables wrapped in seaweed and rice",
          price:"~ 209",
        },
        {
          image: dish5,
          title: "Chocolate Lava Cake",
          description: "Decadent chocolate cake with a gooey center",
          price:"~ 250",
        },
        {
          image: dish6,
          title: "Greek Salad",
          description: "Crisp lettuce, olives, feta cheese, and tangy dressing",
          price:"~ 199",
        },
        {
            image: dish7,
            title: "Pad Thai",
            description: "Stir-fried rice noodles with shrimp, tofu, and peanuts",
            price:"~ 99",
        },
        {
            image: dish8,
            title: "Peking Duck",
            description: "Crispy duck with pancakes, cucumber, and hoisin sauce",
            price:"~ 69",
        },
        {
            image: dish9,
            title: "Beef Wellington",
            description: "Tender beef filet wrapped in pastry with mushrooms and herbs",
            price:"~ 349",
        },
        {
            image: dish10,
            title: "Tiramisu",
            description:
            "Italian dessert with layers of coffee-soaked biscuits and mascarpone",
            price:"~ 149",
        },
    ];
    
    
  return (

    <div className='Menu' id='menu'>
      <h2>Our Menu</h2>
      <div className="Menu_grid">
        {DISHES.map((project,index)=>(
          <Dishcard key={index} project={project}/>
        ))}
      </div>

    </div>


  )
}

export default Menu