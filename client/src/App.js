import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/user"
import { ProductProvider } from "./context/product";
import { OrderableProvider } from "./context/orderable";


import './App.css';



function App() {

  return (
    <UserProvider>
      <ProductProvider>
        <OrderableProvider>
                <div className="App">
                  <Routes>
                    <Route path="/" element={''} />
                  </Routes>
                </div>
        </OrderableProvider>
       </ProductProvider>
     </UserProvider>
  );
}

export default App;
