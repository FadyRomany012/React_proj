import "./App.css";
import Home_page from "./Home_page/Home_page";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// or less ideally
function App() {
  return (
    <div className="App">
      <Home_page></Home_page>
      <div className="alert alert-primary" role="alert">
        Footer
      </div>
    </div>
  );
}

export default App;
