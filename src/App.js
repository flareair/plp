import React, { useState } from 'react';

import './App.css';
import { Switcher } from './plp/Switcher'
import { RegularView } from './plp/RegularView'
import data from './fakeData.json'

const views = {
  regular: 'regular',
  zoom: 'zoom',
  grid: 'grid'
}

function App() {
  const [view, setView] = useState(views.regular)

  const changeView = (newView) => {
    console.log(newView)
    setView(newView)
  }

  return (
    <div className="App">
      <Switcher change={changeView}/>
      
      {
        {
          'regular': <RegularView data={data}/>
        }[view]
      }
    </div>
  );
}

export default App;
