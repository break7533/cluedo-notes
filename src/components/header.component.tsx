import React from 'react';

interface HeaderProps {
    players: string[]
}

function renderPlayer(player: string): JSX.Element { 
    return (
        <td>{player}</td>
    );
}

export function HeaderComponent(props: HeaderProps): JSX.Element {
    return (
        <table>
            <thead>
                <td>Cluedo</td>
            { props.players.map((p) => renderPlayer(p)) }
            </thead>
        </table>
    );
}
