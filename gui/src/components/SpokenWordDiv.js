
import React from 'react';
function SpokenWordDiv(recognizedWord,spokenWordTransitionBoolean) {
  return (
    <div className="SpokenWordDiv">
        {spokenWordTransitionBoolean===false?<div className='SpokenWordDivText'>{recognizedWord}</div>
        :<div className='SpokenWordDivTextFaded'>{recognizedWord}</div>}
    </div>
  );
}

export default SpokenWordDiv;
