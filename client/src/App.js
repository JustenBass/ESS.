import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/user"
import { ProductProvider } from "./context/product";
import { OrderableProvider } from "./context/orderable";
import Home from "./pages/Home";


import './App.css';



function App() {

  return (
    <UserProvider>
      <ProductProvider>
        <OrderableProvider>
          <BrowserRouter>
                <div className="App">
                  <Routes>
                    <Route path="/ff" element={ <Home />} />
                  </Routes>
                </div>
          </BrowserRouter>
        </OrderableProvider>
       </ProductProvider>
     </UserProvider>
  );
}

export default App;
