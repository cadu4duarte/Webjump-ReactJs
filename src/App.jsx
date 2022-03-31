import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SearchAppBar from './components/Header';
import './global.css'


function App() {
 


  return (
    <div className="App">
      <BrowserRouter>
        <SearchAppBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
