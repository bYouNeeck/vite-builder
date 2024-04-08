import { useState } from 'react';
import './App.css';
import Basic from './components/Basic';
import Button from './components/Button';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='flex'>
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              One of three columns
            </div>
            <div className="col">
              One of three columns
            </div>
            <div className="col">
              One of three columns
            </div>
          </div>
        </div>
        <Button />
        <Basic />
      </div>
    </>
  );
}

export default App;

if (import.meta.env.DEV) {
  // Only run this code in development mode
  ReactDOM.createRoot(document.getElementsByClassName('root')[0]).render(<App />);
} else {
  const qtInterval = setInterval(() => {
    const qtComs = document.getElementsByClassName('root');
    for (let i = 0; i < qtComs.length; i++) {
      const qtCom = qtComs[i];
      ReactDOM.createRoot(qtCom).render(<App />);
    }
    if (qtComs.length > 0) {
      clearInterval(qtInterval);
    }
  }, 500);
}
