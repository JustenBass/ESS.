import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/user"
import { ProductProvider } from "./context/products";
import Home from "./pages/Home";
import Login from "./pages/Login";


import './App.css';



function App() {

  return (
    <UserProvider>
      <ProductProvider>
          <BrowserRouter>
                <div className="App">
                  <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="/login" element={ <Login />} />
                  </Routes>
                </div>
          </BrowserRouter>
        </ProductProvider>
     </UserProvider>
  );
}

export default App;
