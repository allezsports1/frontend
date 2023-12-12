import './App.css';
import { BrowserRouter as Router , Routes , Route, BrowserRouter } from 'react-router-dom';
import Home from './front-end/components/Home';
import Navbar from './front-end/components/Navbar';
import Footer from './front-end/components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path='/'/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
