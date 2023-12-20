import React , {useEffect} from 'react';
import "./Image360.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const headerText= 'Explore best farmer services'

const Image360 = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
          // Global settings
          offset: 50, // Offset (in px) from the original trigger point
          duration: 1000, // Animation duration
          easing: 'ease-in-out', // Easing type
          delay: 30, // Delay between each element animation
        });
      }, []);
  return (
    <section className='vr-hero'>
        <div className='vr-text'>
          <div class='section'>
            <h1 class='revealUp' data-aos="fade-up">{headerText}</h1>
          </div>
        </div>
        <div className='vr-iframe'>
          <iframe
            style={{}}
            src='https://Yash-Tulsani.github.io/git-clone-vr/hero.html'
            allowFullScreen
            allowvr='yes'
            allow='xr-spatial-tracking; vr; xr; accelerometer; magnetometer; gyroscope; webvr; webxr; encrypted-media; picture-in-picture'
            title='Iframe Example'
          ></iframe>
        </div>
    </section>
  );
};

export default Image360;
