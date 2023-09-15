### E-commerce website by Nikhil Anand

This project is developed in `React`.

This is a frontend part of an e-commerce website rendering product cards displaying image, title, price and quantity\
of product added to cart.

The project have 4 pages: 
1. (`/`)[https://e-commerce-by-nikhil-anand.netlify.app/] the root page shows the products\
the data for products is copied from (`fakestoreapi`)[https://fakestoreapi.com/], there are 20 products shown in the first page of the site.

2. (`/cart`)[https://e-commerce-by-nikhil-anand.netlify.app/cart] the cart page shows the products added\
to the cart their price, quantity and title of the product and Subtotal amount of all the products added to cart.\
 Buttons in product cards in cart can also be used to increase \
 or decrease quantity of that product. If user wants they can go back to shopping by clicking on `Continue Shopping` button\
 or can checkout by clicking `Checkout` button at bottom of the cart section.

3. (`/checkout`)[https://e-commerce-by-nikhil-anand.netlify.app/checkout] after user decides to checkout by clicking on the button\
 they can enter their details like 'name', 'address', 'phone number' and 'email ID' and proceed by clicking on `Proceed` button.

4. (`/placed`)[https://e-commerce-by-nikhil-anand.netlify.app/placed] clicking on `Proceed` button shows message about placing of order.


A context is used in this project to manage the state of cart items across the Routes of React.

