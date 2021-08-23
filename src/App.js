import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { CartProvider } from "react-use-cart";
import Footer from './pages/Footer';
import { Contact } from './pages/Contact';
import {Register} from './pages/Register';



function App() {
  return (
    <>
    <CartProvider>
<Router>
  <Navigation />
<Switch>
<Route path='/' exact component={Home} />
<Route path='/Products' exact component={Products} />
<Route path='/Cart' exact component={Cart} />
<Route path='/Contact' exact component={Contact} />
<Route path='/Register' exact component={Register} />
</Switch>
</Router>
<Footer />
</CartProvider>

    </>
  );
}

export default App;
