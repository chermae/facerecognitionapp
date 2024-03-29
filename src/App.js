import React from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    "number": {
        "value": 50
    },
    "size": {
        "value": 3
    }
},
"interactivity": {
    "events": {
        "onhover": {
            "enable": true,
            "mode": "repulse"
        }
    }
}
}

const App = ()=> {
  return (
    <div className='App'>
    <Particles 
    className='particles'
              params={particlesOptions}
            />
     <Navigation />
     <Logo />
     <Rank />
     <ImageLinkForm />
    {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
