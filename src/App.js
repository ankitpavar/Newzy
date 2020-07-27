import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Weather from './components/Weather';
import EngRow from './components/EngRow';
import HinRow from './components/HinRow';

function App() {
  const [language, setLanguage] = useState('english');
  const [lat, setLat] = useState(20.5937);
  const [long, setLong] = useState(78.9629);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }, [])
  
  return (
    <>
      <section className=" text-main-text bg-primary body-font">
        <Header setLanguage={setLanguage} />
        <div className="container px-4 py-5 mx-auto ">
          <Weather lat={lat} long={long}/>
          {language === 'english' ? <EngRow /> : <HinRow />}
        </div>
        <Footer />
      </section>
    </>
  );
}

export default App;
