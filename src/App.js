import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import Contacts from './Pages/Contacts/Contacts';
import Order from './Pages/Order/Order';
import Delivery from './Pages/Delivery/Delivery';
import Cart from './Pages/Cart/Cart';
import NotFound from './Pages/NotFound/NotFound';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { createContext, useEffect,useState } from 'react';
import { onAuthChange,onCategoriesLoad,onOrdersLoad,onProductsLoad } from './firebase';

export const AppContext = createContext({
  categories:[],
  products:[],
  orders:[],
  cart:{},
  setCart:()=>{ },
  user:null,
});
// import AnimatedText from './AnimatedText';

function App() {
  const[categories,setCategories] = useState([]);
  const[product, setProducts] = useState([]);
  const[orders, setOrders] = useState ([]);
  const[cart,setCarts] = useState(()=>{
    return JSON.parse(localStorage.getItem("cart")) ||{};
  });
  const[user,setUser] = useState(null);
  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart));
  },[cart]);
  useEffect(() => {
    onCategoriesLoad(setCategories);
    onProductsLoad(setProducts);
    onOrdersLoad(setOrders);
    onAuthChange(user => {
      if(user){
        user.isAdmin = user && user. email ==="sheishenbekovaainazik5@gmail.com";
      }
      setUser(user);
    })
  },[] );

  return (
    <div className='App'>

      <AppContext.Provider value={{ categories, cart, user, orders }} >
        
        <Router>
          <Header />
          <main>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="order" element={<Order />} />
                <Route path="delivery" element={<Delivery />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              {/* <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <AnimatedText />
    </div> */}
            </div>
            
          </main>
          <Footer />
        </Router>

      </AppContext.Provider>

    </div>

  );
}

export default App;