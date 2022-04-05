import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './pages/Footer/footer';
import './global.css';


function App() {
 


  return (
    <BrowserRouter>
      <div className="container">
        <div className="App">
          <Header/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
            </Routes>
            <Footer/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
