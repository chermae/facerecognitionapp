import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import './App.css';

function App() {
  return (
    <div>
     <Navigation />
     <Logo />
     <ImageLinkForm />
    {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
