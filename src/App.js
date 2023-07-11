import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Quotes from './components/quotes';
import Home from './components/home';
import Layout from './components/layout';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="quotes" element={<Quotes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
