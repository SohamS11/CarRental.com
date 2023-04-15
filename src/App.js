import "./App.css";
import Footer from "./component/Footer/Footer";
import MainDash from "./component/MainDash/MainDash";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
       <MainDash />
      <Footer />
    </div>
  );
}

export default App;
