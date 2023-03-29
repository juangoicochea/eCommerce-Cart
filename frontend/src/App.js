import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

//Screens
import { HomeScreen } from './screens/HomeScreen';
import { CartsSaved } from './screens/CartsSaved';

//Components
import { Navbar } from './components/Navbar';

function App() {
  const [cartOpen, setCartOpen] = useState( false );

  return (
      <BrowserRouter>
        <Navbar setCartOpen={ setCartOpen } />
        <main>
          <Routes>
            <Route exact path='/' element={<HomeScreen cartOpen={ cartOpen } setCartOpen={ setCartOpen } />} />
            <Route exact path='/cartsaved' element={<CartsSaved />} />
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
