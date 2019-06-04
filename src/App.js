import React from 'react';
import './App.css';
import { Grid } from './Components/Grid';
import { Header } from './Components/Header';
import { Nav } from './Components/Navbar';
import { Instagram } from './Components/Instagram';
import { Footer } from './Components/Footer';

const styleContent = {
  background: "#fff"
}

const arrayRing = [
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RingPics/Ring%20(1).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RingPics/Ring%20(10).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RingPics/Ring%20(11).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RingPics/Ring%20(12).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RingPics/Ring%20(13).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RingPics/Ring%20(14).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RingPics/Ring%20(20).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RingPics/Ring%20(16).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RingPics/Ring%20(17).jpg"
];

const arrayCrown = [
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RealCrowns/rCrown%20(1).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RealCrowns/rCrown%20(2).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RealCrowns/rCrown%20(3).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RealCrowns/rCrown%20(4).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RealCrowns/rCrown%20(5).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RealCrowns/rCrown%20(6).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RealCrowns/rCrown%20(7).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RealCrowns/rCrown%20(8).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/RealCrowns/rCrown%20(9).jpg"
];

const arraySwing = [
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/SwingPics/Swing%20(1).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/SwingPics/Swing%20(10).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/SwingPics/Swing%20(11).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/SwingPics/Swing%20(12).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/SwingPics/Swing%20(13).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/SwingPics/Swing%20(14).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/SwingPics/Swing%20(15).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/SwingPics/Swing%20(16).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/SwingPics/Swing%20(17).jpg"
];

const arrayPareo = [
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/PareoPics/Pareo%20(1).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/PareoPics/Pareo%20(3).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/PareoPics/Pareo%20(4).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/PareoPics/Pareo%20(5).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/PareoPics/Pareo%20(6).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/PareoPics/Pareo%20(7).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/PareoPics/Pareo%20(9).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/PareoPics/Pareo%20(1).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/PareoPics/Pareo%20(1).jpg"
];

const arrayOther = [
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/OtherPictures/Bed%20(7).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/OtherPictures/Arch%20(2).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/OtherPictures/Bench%20(1).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/OtherPictures/Candle%20(1).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/OtherPictures/Chandelier%20(2).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/OtherPictures/Hammock%20(4).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/OtherPictures/Horse%20(2).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/OtherPictures/Ladder%20(1).jpg",
  "https://raw.githubusercontent.com/anthony6310/cardin/master/Website/OtherPictures/Tiki%20(1).jpg"
];

const arrayHeaderLinks = [
  "Boho Ring", "Crown", "Swing", "Pareo", "Other Props", "Instagram Feed"
];

const descriptionRing = "Ring";
const descriptionCrown = "Crown";
const descriptionSwing = "Swing";
const descriptionPareo = "Pareo";
const descriptionOther = "Other";

function App() {
  return (
    <div className="App" >
        <Header />
        <div style={styleContent}>
          <Nav links={arrayHeaderLinks} />
          <br/>
          <Grid title="Boho Ring" description={descriptionRing} images={arrayRing} />
          <Grid title="Crown" description={descriptionCrown} images={arrayCrown} />
          <Grid title="Swing" description={descriptionSwing} images={arraySwing} />
          <Grid title="Pareo" description={descriptionPareo} images={arrayPareo} />
          <Grid title="Other Props" description={descriptionOther} images={arrayOther} />
          <br/>
          <Instagram title="Instagram Feed" />
          <br/>
          <Footer />
        </div>
    </div>
  );
}

export default App;
