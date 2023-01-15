import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/navBar";
import {Banner} from "./components/banner"

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Banner/>
    </div>
  );
}
export default App;
