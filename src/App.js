import "./styles/App.css";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <div className="container">
          <Cards />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
