import React, { useState } from 'react';

const ColorSlider = (props) => {
  const { text, value, setValue } = props
  return (
    <div>
      <input value={value} type='range' min='0' max='255' step='1' onChange={ev => setValue(ev.target.value)} /> {text} {value}
    </div>
  );
}


function App() {
  const [red, setRed] = useState('125');
  const [green, setGreen] = useState('125');
  const [blue, setBlue] = useState('125');

  return (
    <main>
      <div>
        <ColorSlider text='Red' value={red} setValue={setRed} />
        <ColorSlider text='Green' value={green} setValue={setGreen} />
        <ColorSlider text='Blue' value={blue} setValue={setBlue} />
      </div>
      <div className='swatch' style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
      </div>
    </main>
  );
}

export default App;
