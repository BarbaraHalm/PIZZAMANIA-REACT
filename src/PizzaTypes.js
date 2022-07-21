import React, { Component } from 'react';

class PizzaTypes extends Component {
    render() { 
        return ( 
            <>
            <div className="container menu">
        <div className="row">
            <h3 className="text-center">{this.props.title}</h3>
            <div className="col-md-3">
                <div className="thumbnail"> 
                    <img src="pizza img copy/cheese.jpg" alt="pizza" className="img-responsive"/>
                <div className="caption">
                    <h3>Mozzarella Pizza</h3>
                    <p className="write">Mozzarella is stretched-curd cheese; and it is creamy white in color; has a mild, fresh
                  lactic flavour and serves as a main ingredient in pizza and sometimes a topping.</p>
                </div>

                </div>
            </div>

            <div className="col-md-3">
                <div className="thumbnail">
                    <img src="pizza img copy/meat.jpg" alt="pizza"/>
                <div className="caption">
                    <h3>MeatLover Pizza</h3>
                    <p className="write">Meats are the main toppings on meatlover pizza. Some examples of the meats are; chicken, saussages, beef, spicy goat meat,and maybe fish, etc. </p>
                </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="thumbnail">
                    <img src="pizza img copy/pepper.jpg" alt="pizza"/>
                <div className="caption">
                    <h3>Pepperoni Pizza</h3>
                    <p className="write">Pepperoni pizza is one of the country's most beloved pizza. It donotes a large pepper in Italian. Nowadays it denotes a spicy salami, usually made with a mixture of beef, pork and spices.</p>
                </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="thumbnail">
                    <img src="pizza img copy/veggie.jpg" alt="pizza"/>
                <div className="caption">
                    <h3>Vegetariano Pizza</h3>
                    <p className="write">The Vegetariano Pizza also known as a (Veggetable pizza) is made with the combination of delicious vegetables like broccoli, onions, carrots, mushroom and cauliflower along with tomatoes, pizza sauce, and cheese.</p>
                </div>
                </div>
            </div>

        </div>

    </div>

            </>
         );
    }
}
 
export default PizzaTypes;