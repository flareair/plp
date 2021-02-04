import React, { useState } from 'react';

import './App.css';
import { Options } from './plp/Options'
import { RegularView } from './plp/RegularView'
import data from './fakeData.json'

const views = {
  regular: 'regular',
  zoom: 'zoom',
  grid: 'grid'
}

function App() {
  const [view, setView] = useState(views.regular)
  const [itemsPerRow, setItemsPerRow] = useState(4)

  const changeView = (newView) => {
    console.log(newView)
    setView(newView)
  }

  return (
    <div className="App">
      <Options change={changeView}/>
      
      {
        {
          'regular': <RegularView data={data} itemsPerRow={itemsPerRow} />
        }[view]
      }
    </div>
  );
}

export default App;
