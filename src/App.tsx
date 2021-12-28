import React, { useState } from 'react';
import { TableComponent } from './components/table.component';
import styled from 'styled-components';
import { PlayersComponents } from './components/players.component';
import './i18n/config';
import { changeLanguage } from 'i18next';
import { useTranslation } from 'react-i18next';

const CardStyles = styled.table`
    display: grid;
    justify-content: center;
    margin-top: 50px;
`;

function App(): JSX.Element {
    const { t } = useTranslation(['en1', 'pt1']);
    const [players] = useState(['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣']);
    const suspects = [
        t('res:characters.Mustard'),
        t('res:characters.Orchid'),
        t('res:characters.Peacock'),
        t('res:characters.Plum'),
        t('res:characters.Scarlett'),
        t('res:characters.Green'),
    ];
    const weapons = [
        t('res:weapons.Candlestick'),
        t('res:weapons.Dagger'),
        t('res:weapons.Lead Pipe'),
        t('res:weapons.Revolver'),
        t('res:weapons.Rope'),
        t('res:weapons.Wrench'),
    ];
    const rooms = [
        t('res:rooms.Ballroom'),
        t('res:rooms.Billiard Room'),
        t('res:rooms.Conservatory'),
        t('res:rooms.Dining Room'),
        t('res:rooms.Hall'),
        t('res:rooms.Kitchen'),
        t('res:rooms.Library'),
        t('res:rooms.Lounge'),
        t('res:rooms.Study'),
    ];

    return (
        <>
            <button
                onClick={() => {
                    localStorage.clear();
                    location.reload();
                }}
            >
                Restart game
            </button>
            <button onClick={() => changeLanguage('pt')}>pt</button>
            <button onClick={() => changeLanguage('en')}>en</button>
            <CardStyles>
                <tbody>
                    <PlayersComponents className="Players" players={players} />
                    <TableComponent
                        className="Suspects"
                        title={t('res:characters.title')}
                        cards={suspects}
                        players={players}
                    />
                    <TableComponent
                        className="Weapons"
                        title={t('res:weapons.title')}
                        cards={weapons}
                        players={players}
                    />
                    <TableComponent
                        className="Rooms"
                        title={t('res:rooms.title')}
                        cards={rooms}
                        players={players}
                    />
                </tbody>
            </CardStyles>
        </>
    );
}

export default App;
