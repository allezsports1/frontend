import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './front-end/components/Navbar';
import Footer from './front-end/components/Footer';
import RouteList from './front-end/RouteList'

function App() {
  return (
    <div className="container">
        <Router>
          <section className='row'>
          <Navbar/>
          </section>
          <section className='row'>
            <RouteList />
          </section>
          <section className='row'>
            <Footer/>
          </section>
        </Router>
    </div>
  );
}

export default App;
