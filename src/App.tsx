import React, { useState } from 'react';
import { TableComponent } from './components/table.component';
import { HeaderComponent } from './components/header.component';
import './styles/App.css';

function App(): JSX.Element {
const [players, setPlayers] = useState(['1','2','3', '4','5','6']);
const [suspects, setSuspects] = useState(['Mustard','Orchid','Peacock', 'Plum','Scarlett','Green']);
const [weapons, setWeapons] = useState(['Candlestick','Dagger','Lead Pipe', 'Revolver','Rope','Wrench']);
const [rooms, setRooms] = useState(['Ballroom', 'Billiard Room', 'Conservatory', 'Dining Room', 'Hall', 'Kitchen', 
'Library', 'Lounge', 'Study']);

  return (
    <div className="App">
      <HeaderComponent players={players}/>
      <TableComponent className="Suspects" title='Suspects' cards={suspects} players={players}/>
      <TableComponent className="Weapons" title='Suspects' cards={suspects} players={players}/>
      <TableComponent className="Rooms" title='Suspects' cards={suspects} players={players}/>
    </div>
  );
}

export default App;
