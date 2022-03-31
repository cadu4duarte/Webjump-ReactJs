import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SearchAppBar from './components/Header';
import './global.css';


function App() {
 


  return (
    <BrowserRouter>
      <div className="container">
        <div className="App">
          <SearchAppBar/>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
