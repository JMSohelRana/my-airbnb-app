import Filters from "./components/filters/Filters";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="bg-gray-40">
      <Navbar></Navbar>
      <Filters></Filters>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
