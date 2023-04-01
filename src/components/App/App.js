import './App.scss';
import {Application} from "../../styles/global";
import Hero from "../Hero/Hero";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Aside from "../Aside/Aside";

function App() {

  return (
      <Application>
       <Header />
       <Banner />
          <div className="main">
              <Hero />
              <Aside />
          </div>
      </Application>

  );
}

export default App;
