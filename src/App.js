import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import myGif from './gif.webp';

function App() {
  return (
    <div className="App">
      <Header /> {/**/ }
      <main>
        <h2>Questi qua siamo io e te!</h2>
        <p>TI AMO TANTO BABY</p>
        <img src={myGif} alt="Animazione GIF"/>
      </main>
    </div>
  );
}

export default App;
