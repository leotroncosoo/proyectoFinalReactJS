import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemList from "./components/ItemList";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Carrito from "./components/Carrito";




function App() {

  
  
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/> 
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/plataforma/:plataforma" element={<ItemList />}/>
          <Route path="/" element={<ItemList/>}/>
          <Route path="/carrito" element={<Carrito/>} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </CartProvider>

  );
}

export default App;
