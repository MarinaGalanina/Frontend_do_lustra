
import React, { useState, useEffect } from 'react';
function ComplementDiv() {
  function randomNumberInRange(min, max, butnot=0) {
    while(true)
    {
      if(butnot!== Math.floor(Math.random() * (max - min + 1)) + min)
      {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }
  }
  
  const complements=[["Jesteś super!"],
               ["Świetnie wyglądasz!"],
               ["Promieniejesz!"],
               ["Jesteś niesamowity/a!"],
               ["Masz umysł tak piękny jak ty."],
               //["Twa uroda zniewala."],
               //["Napis na grobie informatyka:","\"kowalski.zip\""],
               //["Czarne dziury powstały tam, gdzie Pan Bóg podzielił przez zero."],
               //["Nałogowcowi komputerowemu spadła na ulicy na głowę cegła.","- Tetris..(pomyślał)"],
               //["Jak śni programista? - Na JAVIE."],
               //["Szef życzył mi dziś rano miłego dnia. Poszedłem więc do domu."],
               //["Rozmowa dwóch szefów:","- Dlaczego twoi pracownicy są zawsze tak punktualni?","- Prosty trick! 30 pracowników a tylko 20 miejsc na parkingu..."],
               //["Szef krzyczy na pracownika:","- Spać to pan może u siebie w domu a nie w firmie!","- Dzięki szefie, już się zbieram."]
              ]
  const [chosenComplement,setChosenComplement]=useState(randomNumberInRange(0,complements.length-1))
  useEffect(() => {
    const interval = setInterval(() => setChosenComplement(randomNumberInRange(0,complements.length-1,chosenComplement)), 10000);//now it changes every 10 sec (10000) but if you want,every 5 minutes complement changes => 300000
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className='ComplementDiv'>
        <span>{complements[chosenComplement].map(e=><div>{e}</div>)}</span>
    </div>
  );
}

export default ComplementDiv;