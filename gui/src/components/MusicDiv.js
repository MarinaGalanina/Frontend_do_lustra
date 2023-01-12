import React, { useState, useEffect } from 'react';
function MusicDiv() {
  const [musicInfo, setMusicInfo] = useState("0.5|paused");
  useEffect(() => {
    let interval = setInterval(async () => {
      let res = await fetch(`http://localhost:8000/musicInfo`);
      let data=await res.json();
      if(musicInfo!==data.data)
      {
        setMusicInfo(data.data);
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [musicInfo]);
  return (
    <div className="MusicDiv">
      <div className="MusicHeader">Obecna Muzyka</div>
      <div>Dźwięki Lasu|Głośność {musicInfo.split("|")[0].substring(0,4)}</div>
      <div>{musicInfo.split("|")[1]==="unpaused"&&"Muzyka Jest Rozgrywana"}{musicInfo.split("|")[1]==="paused"&&"Muzyka Jest Zatrzymana"}</div>
    </div>
  );
}

export default MusicDiv;
