import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import products from './products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import { ShopContextProvider } from './context/shop-context';
import { Cart } from './components/Cart';
import Checkout from './components/Checkout';
import OrderPlaced from './components/OrderPlaced';

function App() {


  return (
    <div className="App bg-light">
      <ShopContextProvider>
        <Router>
            <Navbar />
          <Routes>

            <Route exact path='/' element={
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap"
              }}>
              {console.log(products)}
                {products.map((product) =>
                  <ProductCard product={product} />
                )}
              </div>
            } />
            <Route path='/cart' element={
             <Cart />
            } />
            <Route path='/checkout' element={
              <Checkout />
            }/>
            <Route path='/placed' element={<OrderPlaced />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;