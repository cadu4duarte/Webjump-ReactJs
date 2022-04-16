import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer/footer';
import './global.css';
import Camisas from './pages/Camisas/camisas';
import Calcas from './pages/Calcas/calcas';
import Sapatos from './pages/Sapatos/sapatos';


function App() {
 


  return (
    <BrowserRouter>
      <div className="container">
        <div className="App">
          <Header/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/camisas" element={<Camisas/>}/>
              <Route exact path="/calcas" element={<Calcas/>}/>
              <Route exact path="/sapatos" element={<Sapatos/>}/>
            </Routes>
            <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
