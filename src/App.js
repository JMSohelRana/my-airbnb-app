import Filters from "./components/filters/Filters";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="bg-gray-40">
      <Navbar></Navbar>
      <Filters></Filters>
    </div>
  );
}

export default App;
