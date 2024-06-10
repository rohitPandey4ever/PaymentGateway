import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>)






//Rough practice
// root.render(
//   <>
//     <App title = 'Hiii' message = 'Hello'/>
//     <App title = 'Hooo' message = 'Namste'></App>
//     <App title = 'Hoppp' message = 'Fook off'></App>
//   </>
// );