import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/user"
import { ProductProvider } from "./context/product";
import { OrderProvider } from "./context/order";
import { GuestCartProvider } from "./context/guest_cart";
import Home from "./pages/Home";
import Login from "./pages/Login";


import './App.css';



function App() {

  return (
    <UserProvider>
      <ProductProvider>
        <OrderProvider>
          <GuestCartProvider>
          <BrowserRouter>
                <div className="App">
                  <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="/login" element={ <Login />} />
                  </Routes>
                </div>
          </BrowserRouter>
          </GuestCartProvider>
        </OrderProvider>
       </ProductProvider>
     </UserProvider>
  );
}

export default App;
