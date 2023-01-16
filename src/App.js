import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/navBar";
import {Banner} from "./components/banner";
import {Skills} from "./components/skills";


function App() {
  return (
    <div className="App">
      <NavBar/>
        <Banner/>
        <Skills/>
    </div>
  );
}
export default App;
