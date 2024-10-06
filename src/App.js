import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Theme from './components/Theme/Theme';
import Faq from './components/Faq/Faq';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
