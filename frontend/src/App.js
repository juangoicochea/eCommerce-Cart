import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Screens
import { HomeScreen } from './screens/HomeScreen';
import { CartScreen } from './screens/CartScreen';
import { CartsSaved } from './screens/CartsSaved';

//Components
import { Navbar } from './components/Navbar';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route exact path='/cart' element={<CartScreen />} />
            <Route exact path='/cartsaved' element={<CartsSaved />} />
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
