import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/user"
import { ProductProvider } from "./context/product";
import { OrderableProvider } from "./context/orderable";
import Home from "./pages/Home";
import Login from "./pages/Login";


import './App.css';



function App() {

  return (
    <UserProvider>
      <ProductProvider>
        <OrderableProvider>
          <BrowserRouter>
                <div className="App">
                  <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="/login" element={ <Login />} />
                  </Routes>
                </div>
          </BrowserRouter>
        </OrderableProvider>
       </ProductProvider>
     </UserProvider>
  );
}

export default App;
