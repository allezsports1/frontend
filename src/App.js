import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './front-end/components/Footer';
import RouteList from './front-end/RouteList'
import Header from './front-end/components/header';

function App() {
  return (
    <div>
        <Router>
          <section className='header'>
            <Header />
          </section>
          <section className='main pt-[73px]'>
            <RouteList />
          </section>
          <section className='footer'>
            <Footer/>
          </section>
        </Router>
    </div>
  );
}

export default App;
