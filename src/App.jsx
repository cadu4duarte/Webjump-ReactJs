import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer/footer';
import './global.css';
import Camisas from './pages/Camisas/camisas';
import Calcas from './pages/Calcas/calcas';
import Sapatos from './pages/Sapatos/sapatos';
import Todos from './pages/Todos/todos'


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
              <Route exact path="/todos" element={<Todos/>}/>
            </Routes>
            <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
