import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import '../styles/SkyBackground.scss';

//Build a dynamic background using the tsparticles library
const StarryBackground = () => {
  const particlesInit = async (main) => {
    console.log("Particles initialized:", main);
    await loadFull(main);
  };

  return (
    <div className="skyBackground">
    <Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    //Set the parameters for dynamic particles
    particles: {
        number: {
          value: 200, 
          density: {
            enable: true,
            area: 800, 
          },
        },
        color: {
          value: "#ffffff", 
        },
        size: {
          value: { min: 0.5, max: 2.5 }, 
        },
        opacity: {
          value: 0.8, 
        },
        shape: {
          type: "star", 
        },
        move: {
          enable: true, 
          speed: 1, 
          direction: "none", 
          outModes: {
            default: "out", 
          },
        },
      },
  }}
/>
</div>
  );
};

export default StarryBackground;