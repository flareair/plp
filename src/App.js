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
  const [itemsPerRow, setItemsPerRow] = useState(6)
  const [showInfo, setShowInfo] = useState(true)

  const optionsProps = {
    setView,
    setItemsPerRow,
    itemsPerRow,
    showInfo,
    setShowInfo
  }

  const regularViewProps = {
    data,
    itemsPerRow,
    showInfo
  }

  return (
    <div className="App">
      <Options {...optionsProps} />
      
      {
        {
          'regular': <RegularView {...regularViewProps} />
        }[view]
      }
    </div>
  );
}

export default App;
