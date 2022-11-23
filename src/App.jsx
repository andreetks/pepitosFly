import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackgroundTop from "./components/BackgroundTop";
import ProductListPage from "./pages/ProductListPage";
import ProductItemPage from "./pages/ProductItemPage";
import CheckoutPage from "./pages/CheckoutPage"

function App() {


  return (
    <>
      <Router>
        <div className="isolate bg-white w-screen max-w-7xl">
          <BackgroundTop />
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/product/:id" element={<ProductItemPage />} />
            <Route path="/checkout" element={ <CheckoutPage />}  />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
