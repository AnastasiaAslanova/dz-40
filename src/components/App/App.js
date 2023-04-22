import './App.scss';

import { Routes, Route } from "react-router-dom";

import Layout from "../Layout/Layuot";
import Home from "../../pages/Home/Home";
import Contact from "../../pages/Contact/Contact";
import News from "../../pages/News/News";
import NotFound from '../../pages/NotFound/NotFound';


function App() {
    return (
      <div className='wrapper'>
          <Routes>
              <Route path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="news" element={<News />} />
                  <Route path='*' element={<NotFound />} />
              </Route>
          </Routes>

      </div>

  );
}

export default App;
