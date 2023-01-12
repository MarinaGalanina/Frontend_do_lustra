
import React, { useState, useEffect } from 'react';
function JokeDiv() {
  function randomNumberInRange(min, max, butnot=0) {
    while(true)
    {
      if(butnot!== Math.floor(Math.random() * (max - min + 1)) + min)
      {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
  }
  
  const jokes=[["Programista otwiera lodówkę, sięga po masło i patrząc na napis \"82%\" mówi:","- A, to jeszcze chwilka i będzie gotowe."],
               ["Dlaczego nie można programować w Boże Narodzenie?","- Bo bug się rodzi!"],
               ["Rozmawia dwóch informatyków, jeden mówi do drugiego:","- Słuchaj, może pożyczysz mi 500 PLN? ","- No powiedzmy 512 tak dla równego rachunku."],
               ["Spotykają się dwaj programiści:","- Słuchaj, potrzebuję generatora liczb losowych","- Czternaście..."],
               ["Przychodzi programista do apteki i mówi:","- Poprosze witaminę C++"],
               ["Dobry programista wiesza się razem ze swoim programem."],
               ["Napis na grobie informatyka:","\"kowalski.zip\""],
               ["Czarne dziury powstały tam, gdzie Pan Bóg podzielił przez zero."],
               ["Nałogowcowi komputerowemu spadła na ulicy na głowę cegła.","- Tetris..(pomyślał)"],
               ["Jak śni programista? - Na JAVIE."],
               ["Rozmowa dwóch szefów:","- Dlaczego twoi pracownicy są zawsze tak punktualni?","- Prosty trick! 30 pracowników a tylko 20 miejsc na parkingu..."],]
  const [chosenJoke,setChosenJoke]=useState(randomNumberInRange(0,jokes.length-1))
  useEffect(() => {
    const interval = setInterval(() => setChosenJoke(randomNumberInRange(0,jokes.length-1,chosenJoke)), 10000);//now it changes every 10 sec (10000) but if you want,every 5 minutes joke changes => 300000
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className='JokeDiv'>
        <span>{jokes[chosenJoke].map(e=><div>{e}</div>)}</span>
    </div>
  );
}

export default JokeDiv;
