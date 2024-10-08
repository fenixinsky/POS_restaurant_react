import {useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] =useState( false);

  const onShowCart = () => {
    setCartIsShown(true);
  };

  const onHideCart = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={onHideCart}/>}
      <Header  onShowCart={onShowCart} />
      
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
