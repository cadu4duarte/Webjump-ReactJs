import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './pages/Footer/footer';
import './global.css';
import Teste from './pages/teste/teste';


function App() {
 


  return (
    <BrowserRouter>
      <div className="container">
        <div className="App">
          <Header/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/camisas" element={<Teste/>}/>
            </Routes>
            <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
