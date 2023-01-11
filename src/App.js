import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import Main from './components/Main/Main';
import Contacts from './components/Contacts/Contacts';
import logo from './assets/logo.png';
import BPlan from './components/BPlan/BPlan';

function App() {
  return (
    <div className='App'>
      <div className='header'>
        <img src={logo} alt='logo' />
        <div className='nav_bar'>
          <Link className='nav_link' to={'/'}>
            Головна
          </Link>
          <Link className='nav_link' to={'/business-plan'}>
            Бізнес план
          </Link>
          <Link className='nav_link' to={'/products'}>
            Товари
          </Link>
          <Link className='nav_link' to={'/contacts'}>
            Контакти
          </Link>
        </div>
      </div>

      <Routes>
        <Route exact path='*' element={<Main />}></Route>
        <Route exact path='/products' element={<Products />}></Route>
        <Route exact path='/contacts' element={<Contacts />}></Route>
        <Route exact path='/business-plan' element={<BPlan />}></Route>
      </Routes>
      <div className='footer'>
        <h2>© 2023 Naked Extravaganza</h2>
      </div>
    </div>
  );
}

export default App;
