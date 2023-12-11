import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route, BrowserRouter } from 'react-router-dom';
import Home from './components/main/Home/Home';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path='/'/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
