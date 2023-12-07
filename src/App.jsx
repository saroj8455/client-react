import './App.css';
import Heading from './components/Heading';

function App() {
  return (
    <>
      <div className='container h-auto mx-auto py-1'>
        <h1 className='text-orange-500 font-medium'>
          React Project generate by Vite+React V1
        </h1>
        <Heading />
      </div>
    </>
  );
}

export default App;
