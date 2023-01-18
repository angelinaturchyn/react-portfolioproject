import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/navBar";
import {Banner} from "./components/banner";
import {Skills} from "./components/skills";
import {AboutMe} from "./components/aboutMe";


function App() {
  return (
    <div className="App">
      <NavBar/>
        <Banner/>
        <AboutMe/>
         <Skills />
    </div>
  );
}
export default App;
