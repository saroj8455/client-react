import './App.css';
import Heading from './components/Heading';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Heading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
