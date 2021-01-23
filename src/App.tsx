import React, { useState } from 'react';
import { TableComponent } from './components/table.component';
import styled from 'styled-components';
import { PlayersComponents } from './components/players.component';

const CardStyles = styled.table`
  display: grid;
  justify-content: center;
  margin-top: 50px;
`;

function App(): JSX.Element {
    const [players] = useState(['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣']);
    const [suspects] = useState(['Mustard', 'Orchid', 'Peacock', 'Plum', 'Scarlett', 'Green']);
    const [weapons] = useState(['Candlestick', 'Dagger', 'Lead Pipe', 'Revolver', 'Rope', 'Wrench']);
    const [rooms] = useState(['Ballroom', 'Billiard Room', 'Conservatory', 'Dining Room', 'Hall', 'Kitchen',
        'Library', 'Lounge', 'Study']);

    return (
        <>
        <button onClick={() => {localStorage.clear();
        location.reload();}}>Restart game</button>
        <CardStyles >
            {/* <HeaderComponent players={players} /> */}
            <tbody>
                <PlayersComponents className="Players" players={players} />
                <TableComponent className="Suspects" title='Suspects' cards={suspects} players={players} />
                <TableComponent className="Weapons" title='Weapons' cards={weapons} players={players} />
                <TableComponent className="Rooms" title='Rooms' cards={rooms} players={players} />
            </tbody>
        </CardStyles>
        </>
    );
}

export default App;
