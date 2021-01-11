import React, { useState } from 'react';
import { TableComponent } from './components/table.component';
import { HeaderComponent } from './components/header.component';
import styled from 'styled-components';

const CardStyles = styled.table`
  display: grid;
  justify-content: center;
  margin-top: 50px;
`;

function App(): JSX.Element {
    const [players, setPlayers] = useState(['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣']);
    const [suspects, setSuspects] = useState(['Mustard', 'Orchid', 'Peacock', 'Plum', 'Scarlett', 'Green']);
    const [weapons, setWeapons] = useState(['Candlestick', 'Dagger', 'Lead Pipe', 'Revolver', 'Rope', 'Wrench']);
    const [rooms, setRooms] = useState(['Ballroom', 'Billiard Room', 'Conservatory', 'Dining Room', 'Hall', 'Kitchen',
        'Library', 'Lounge', 'Study']);

    return (
        <CardStyles >
            <HeaderComponent players={players} />
            <tbody>
                <TableComponent className="Suspects" title='Suspects' cards={suspects} players={players} />
                <TableComponent className="Weapons" title='Weapons' cards={weapons} players={players} />
                <TableComponent className="Rooms" title='Rooms' cards={rooms} players={players} />
            </tbody>
        </CardStyles>
    );
}

export default App;
