import { el } from 'date-fns/locale';
import React, { useState, useEffect } from 'react';
function WeatherDiv() {
  const returnTemperature=(data)=>
  {
    return data.hourly.temperature_2m[new Date().getHours()]
  }
  const returnWeatherConditionString=(data)=>
  {
    const returnStringFromWmoCode=(code)=>{
      const codes=[0,1,2,3,45,48,51,53,55,56,57,61,63,65,66,67,71,73,75,77,80,81,82,85,86,95,96,99]
      const descriptions=["Czyste Niebo",
                          "Przeważnie jasne",
                          "Częściowe zachmurzenie",
                          "Pochmurne niebo",
                          "Mgła",
                          "Osadzanie się mgły szronowej",
                          "Lekka mżawka",
                          "Umiarkowana mżawka",
                          "Gęsta mżawka",
                          "Lekka mroźna mżawka",
                          "Gęsta intensywna mroźna mżawka",
                          "Lekki deszcz",
                          "Umiarkowany deszcz",
                          "Intensywny deszcz",
                          "Lekki marznący deszcz",
                          "Umiarkowany marznący deszcz",
                          "Intensywny marznący deszcz",
                          "Lekki opad śniegu",
                          "Umiarkowane opady śniegu",
                          "Intensywne opady śniegu",
                          "Ziarna śniegu",
                          "Lekkie opady deszczu",
                          "Umiarkowane opady deszczu",
                          "Intensywne opady deszczu",
                          "Lekkie opady śniegu",
                          "Intensywne opady śniegu",
                          "Lekkie burze",
                          "Umiarkowane burze",
                          "Burza z lekkim gradem",
                          "Burza z silnym gradem"]
      if(descriptions[codes.indexOf(code)]!==undefined)
      {
        return descriptions[codes.indexOf(code)]
      }
      else
      {
        return "Nieznana"
      }
    }
    return returnStringFromWmoCode(data.hourly.weathercode[new Date().getHours()])
  }
//https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,relativehumidity_2m,windspeed_10m
//api is being called every hour, to not ddos it, or get blocked access to it
  const [latitude,setLatitude]=useState(null);
  const [longitude,setLongitude]=useState(null);
  const [apiData,setApiData]=useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position)=>{
      //console.log("Current Geolocation. Latitude, Longtitude")
      //console.log(position.coords.latitude)
      //console.log(position.coords.longitude)
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
      let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,weathercode`);
      let data=await res.json();
      setApiData(data)
      console.log(data)
    })
    const interval = setInterval(() =>{ 
      navigator.geolocation.getCurrentPosition(async (position)=>{
        //console.log("Current Geolocation. Latitude, Longtitude")
        //console.log(position.coords.latitude)
        //console.log(position.coords.longitude)
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,weathercode`);
        let data=await res.json();
        setApiData(data)
        console.log(data)
      })
    }, 10800000);//10800000 milliseconds = 3hours
    return () => {
      clearInterval(interval);
    };
    //let res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`);
    //let data=await res.json();
    //setApiData(data.data)
    //console.log(apiData)
    //<div>Longtitude: {longitude}</div>
    //<div>Latitude: {latitude}</div>
    //<div>Elevation: {apiData!=null&&apiData.elevation} meters </div>
  }, []);

  return (
    <div className="WeatherDiv">
      <div className="FlexRowWeather">
      <div className="WeatherTemperatureDiv">{apiData!=null?returnTemperature(apiData):"N/A"}{apiData!=null&&apiData.hourly_units.temperature_2m}</div>
      <div className="WeatherDescriptionDiv">Obecna Pogoda: {apiData!=null?returnWeatherConditionString(apiData):"No Internet"}</div>
      </div>
      <div className="OpenWeatherApiDisclaimer"><a href="https://open-meteo.com/">Weather data by Open-Meteo.com</a></div>
    </div>
  );
}

export default WeatherDiv;
