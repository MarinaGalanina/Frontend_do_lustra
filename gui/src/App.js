import './App.css';
import CalendarDiv from "./components/CalendarDiv";
import MusicDiv from "./components/MusicDiv"
import WeatherDiv from "./components/WeatherDiv"
import HourDiv from "./components/HourDiv"
import SpokenWordDiv from './components/SpokenWordDiv';
import ComplementDiv from './components/ComplementDiv';
import JokeDiv from './components/JokeDiv';
import React, { useState, useEffect } from 'react';
function App() {
  //show components logic start
  const [showBlackScreenDiv, setShowBlackScreenDiv] = useState(true);
  //const [showCommands, setShowCommands] = useState(false);

  const [showHour, setShowHour] = useState(true);
  const [showMusic, setShowMusic] = useState(true);
  const [showWeather, setShowWeather] = useState(true);
  const [showCalendar, setShowCalendar] = useState(true);
  const [showComplement, setShowComplement] = useState(true);
  const [showJoke, setShowJoke] = useState(true);
  //show components logic end
  //recognized word logic fetching start
  const [spokenWordTransitionBoolean, setSpokenWordTransitionBoolean] = useState(false);
  const [recognizedWord, setRecognizedWord] = useState("No Microphone Connected");
  useEffect(() => {
	let interval = setInterval(async () => {
		let res = await fetch(`http://localhost:8000/`);
    let data=await res.json();
    if(recognizedWord!==data.data)
    {
      
      setSpokenWordTransitionBoolean(true);
      setTimeout(() => {
        setRecognizedWord(data.data);
        setSpokenWordTransitionBoolean(false);
      }, 1000);
      
    }
    switch (recognizedWord) {
      //case "hejka":
      //  setShowCommands(false)
      //  console.log(`Words specify action to show commands in BlackScreenDiv div.`);
      //  break;
      case "pokaż wszystko":
        setShowBlackScreenDiv(false)
        console.log(`Words specify action to hide BlackScrenDiv div.`);
        break;
      case "hejka":
        setShowBlackScreenDiv(false)
        console.log(`Words specify action to hide BlackScrenDiv div.`);
        break;
      case "ukryj wszystko":
        setShowBlackScreenDiv(true)
        console.log(`Words specify action to display BlackScrenDiv div.`);
        break;
      
      case "pokaż pogodę":
        setShowWeather(true)
        console.log(`Words specify action to display weather div.`);
        break;
      case "ukryj pogodę":
        setShowWeather(false)
        console.log(`Words specify action to hide weather div.`);
        break;
      
      case "pokaż godzinę":
        setShowHour(true)
        console.log(`Words specify action to display hour div.`);
        break;
      case "ukryj godzinę":
        setShowHour(false)
        console.log(`Words specify action to hide hour div.`);
        break;

      case "pokaż muzykę":
        setShowMusic(true)
        console.log(`Words specify action to display music div.`);
        break;
      case "ukryj muzykę":
        setShowMusic(false)
        console.log(`Words specify action to hide music div.`);
        break;
      
      case "pokaż kalendarz":
        setShowCalendar(true)
        console.log(`Words specify action to display calendar div.`);
        break;
      case "ukryj kalendarz":
        setShowCalendar(false)
        console.log(`Words specify action to hide calendar div.`);
        break;
      
      case "pokaż komplement":
        setShowComplement(true)
        console.log(`Words specify action to display complement div.`);
        break;
      case "ukryj komplement":
        setShowComplement(false)
        console.log(`Words specify action to hide complement div.`);
        break;

      case "pokaż żart":
        setShowJoke(true)
        console.log(`Words specify action to display joke div.`);
        break;
      case "ukryj żart":
        setShowJoke(false)
        console.log(`Words specify action to hide joke div.`);
        break;
      default:
        console.log(`Words dont specify action mirror would need to display.`);
    }
      
    
    //console.log(recognizedWord);
	}, 2000);
	return () => {
		clearInterval(interval);
	};
}, [recognizedWord]);
//recognized word logic fetching end

  return (
    <div className="App">
      <div className="FlexRowHeader">
        {showHour===true?HourDiv():<div style={{opacity: 0 }}>{HourDiv()}</div>} 
        {showMusic===true?MusicDiv():<div style={{opacity: 0 }}>{MusicDiv()}</div>} 
        {showWeather===true?WeatherDiv():<div style={{opacity: 0 }}>{WeatherDiv()}</div>}
      </div>
      <div className="Grid">
        {showCalendar===true?CalendarDiv():<div style={{opacity: 0 }}>{CalendarDiv()}</div>}
        {showComplement===true?ComplementDiv():<div style={{opacity: 0 }}>{ComplementDiv()}</div>}
        {showJoke===true?JokeDiv():<div style={{opacity: 0 }}>{JokeDiv()}</div>}
      </div>
      {SpokenWordDiv(recognizedWord,spokenWordTransitionBoolean)}
      
      {showBlackScreenDiv===true&&<div className='BlackScreenDiv'><span>
        {["pokaż wszystko LUB hejka => Pokaż Wszystko i Ukryj Polecenia",
          "ukryj wszystko => Ukryj Wszystko i Wyświetl Polecenia",
          "pokaż pogodę => Pokaż Okienko Pogody",
          "ukryj pogodę => Ukryj Okienko Pogody",
          "pokaż godzinę => Pokaż Okienko Godziny",
          "ukryj godzinę => Ukryj Okienko Godziny",
          "pokaż muzykę => Pokaż Okienko Muzyki",
          "ukryj muzykę => Ukryj Okienko Muzyki",
          "zatrzymaj muzykę => Zatrzymaj Muzykę",
          "wznów muzykę => Wznów Muzykę",
          "pokaż kalendarz => Pokaż Okienko Kalendarza",
          "ukryj kalendarz => Ukryj Okienko Kalendarza",
          "pokaż komplement => Pokaż Okienko Komplementów",
          "ukryj komplement => Ukryj Okienko Komplementów",
          "pokaż żart => Pokaż Okienko Żartów",
          "ukryj żart => Ukryj Okienko Żartów",
          "ścisz muzykę LUB jeszcze ścisz muzykę => Mów Komendy Na Przemian Aby Ściszyć Muzykę",
          "podgłośnij muzykę LUB jeszcze podgłośnij muzykę => Mów Komendy Na Przemian Aby Podgłośnić Muzykę"].map(e=><div className='BlackScreenDivFlex'>{e.split("=>").map(el=><div>| {el} |</div>)}</div>)}</span></div>} 
    </div>
  );
}

export default App;
