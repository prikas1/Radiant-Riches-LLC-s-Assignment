import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './Component/top';
import Middle from './Component/middle';
import Footer from './Component/footer';



function App() {
  return (
    <div className="App">
      <Top />
      <Middle />
      <Footer />
   </div>

  );
}

export default App;

